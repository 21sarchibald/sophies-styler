import { useState } from 'react';
import { registerNewUser } from '../../services/authService';

export default function RegistrationForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        return registerNewUser(firstName, lastName, email, password);
    }

    return (
        <form onSubmit={handleSubmit} className="mx-auto flex flex-col p-10 w-xl text-left font-sans">
            <label htmlFor="firstName">First Name:</label>
            <input
                type="text"
                className="h-10 mb-5 border border-gray-500 focus:border-pink-600 focus:border-2 focus:outline-none p-2 rounded-sm"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            ></input>
            <label htmlFor="lastName">Last Name:</label>
            <input
                type="text"
                className="h-10 mb-5 border border-gray-500 focus:border-pink-600 focus:border-2 focus:outline-none p-2 rounded-sm"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            ></input>
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
            <button type="submit" className="bg-black text-white hover:cursor-pointer p-3 rounded-4xl">Create Account</button>
        </form>
    )
}