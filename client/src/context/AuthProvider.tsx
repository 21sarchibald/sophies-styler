import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import type { User } from "../types/User";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }: {children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        async function loadUser() {
            const { data } = await supabase.auth.getUser();
            const supabaseUser = data.user as User | null;
            setUser(supabaseUser);
        };
        loadUser();

        const { data: listener } = supabase.auth.onAuthStateChange(
            async (_event, session) => {
                if (session) {
                    const { data } = await supabase.auth.getUser();
                    const supabaseUser = data.user as User | null;
                    setUser(supabaseUser);
                } else {
                    setUser(null);
                }
            }
        )

        return () => listener.subscription.unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}