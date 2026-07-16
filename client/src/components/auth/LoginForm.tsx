import { useState } from 'react';
import { signInWithEmail } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        try {
            const { error} = await signInWithEmail(email, password);
            
            if (error) {
                console.log(error);
                return;
            }
            navigate("/users/dashboard");
        } finally {
            setLoading(false);
        }

    }

    return (
        <form onSubmit={handleSubmit} className="mx-auto flex flex-col p-10 w-full max-w-xl text-left font-sans">
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                className="h-10 mb-5 border border-gray-500 focus:border-pink-600 focus:border-2 focus:outline-none p-2 rounded-sm"
                id="email"
                name="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
            ></input><label htmlFor="password">Password:</label>
            <input
                type="password"
                className="h-10 mb-5 border border-gray-500 focus:border-pink-600 focus:border-2 focus:outline-none p-2 rounded-sm"
                id="password"
                name="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
            ></input>
                <button type="submit" disabled={loading} className="bg-black text-white hover:cursor-pointer hover:bg-gray-900 p-3 rounded-4xl disabled:bg-gray-500 disabled:cursor-not-allowed">{(loading) ? "Signing In..." : "Sign In"}</button>
        </form>
    )
}