import { useState } from 'react';
import { signInWithEmail } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        const { error} = await signInWithEmail(email, password);

        if (error) {
            console.log(error);
            return;
        }
        navigate("/users/dashboard");
    }

    return (
        <form onSubmit={handleSubmit} className="mx-auto flex flex-col p-10 w-full max-w-xl text-left font-sans">
            <label htmlFor="email">Email:</label>
            <input
                type="text"
                className="h-10 mb-5 border border-gray-500 focus:border-pink-600 focus:border-2 focus:outline-none p-2 rounded-sm"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            ></input><label htmlFor="password">Password:</label>
            <input
                type="text"
                className="h-10 mb-5 border border-gray-500 focus:border-pink-600 focus:border-2 focus:outline-none p-2 rounded-sm"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button type="submit" className="bg-black text-white hover:cursor-pointer p-3 rounded-4xl">Sign In</button>
        </form>
    )
}