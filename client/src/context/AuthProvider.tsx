import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import type { User } from "../types/User";
import { AuthContext } from "./AuthContext";
import { initializeUser } from "../services/userService";

export function AuthProvider({ children }: {children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadUser() {
            const { data } = await supabase.auth.getUser();
            const supabaseUser = data.user as User | null;
            setUser(supabaseUser);

            if (supabaseUser) {
                await initializeUser(supabaseUser.id);
            }

            setLoading(false);
        };
        loadUser();

        const { data: listener } = supabase.auth.onAuthStateChange(
            async (_event, session) => {
                if (session) {
                    const { data } = await supabase.auth.getUser();
                    const supabaseUser = data.user as User | null;
                    setUser(supabaseUser);

                    if (supabaseUser) {
                        await initializeUser(supabaseUser.id);
                    }
                } else {
                    setUser(null);
                }
            }
        )

        return () => listener.subscription.unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    )
}