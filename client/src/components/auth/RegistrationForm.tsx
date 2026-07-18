import { useState } from 'react';
import { registerNewUser } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { saveLocalQuizResults } from '../../services/userService';
import { getRegistrationError } from '../../utils/authErrors';

export default function RegistrationForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const { error } = await registerNewUser(firstName, lastName, email, password);
            if (error) {
                const errorMessage = getRegistrationError(error);
                setError(errorMessage);
                return;
            }

            await saveLocalQuizResults();

            navigate("/users/dashboard");

        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mx-auto flex flex-col p-10 w-full max-w-xl text-left font-sans">
            {(error != "" && (
                <div className="text-center w-full bg-red-200 text-red-800 rounded-sm p-2 mb-5">{error}</div>
            )
            )}
            <label htmlFor="firstName">First Name:</label>
            <input
                type="text"
                className="h-10 mb-5 border border-gray-500 focus:border-pink-600 focus:border-2 focus:outline-none p-2 rounded-sm"
                id="firstName"
                name="firstName"
                value={firstName}
                required
                onChange={(e) => setFirstName(e.target.value)}
            ></input>
            <label htmlFor="lastName">Last Name:</label>
            <input
                type="text"
                className="h-10 mb-5 border border-gray-500 focus:border-pink-600 focus:border-2 focus:outline-none p-2 rounded-sm"
                id="lastName"
                name="lastName"
                value={lastName}
                required
                onChange={(e) => setLastName(e.target.value)}
            ></input>
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
                className="h-10 mb-0 border border-gray-500 focus:border-pink-600 focus:border-2 focus:outline-none p-2 rounded-sm"
                id="password"
                name="password"
                value={password}
                minLength={6}
                required
                onChange={(e) => setPassword(e.target.value)}
            ></input>
            <p className="mb-5 text-sm">Passwords must contain at least 6 characters.</p>
            <button type="submit" disabled={loading} className="bg-black text-white hover:cursor-pointer hover:bg-gray-800 p-3 rounded-4xl disabled:bg-gray-500 disabled:cursor-not-allowed">{(loading) ? "Creating Account..." : "Create Account"}</button>
        </form>
    )
}