import { useAuth } from "../../context/useAuth";
import { signOut } from "../../services/authService"
import { useNavigate } from "react-router-dom";
import { getUserColorPalette } from "../../services/userService";

export default function Dashboard() {

    const { user } = useAuth();
    const navigate = useNavigate();
    async function handleSignOut() {
        const error = await signOut();

        if (error) {
            console.log("Error logging out");
            return;
        } else {
            navigate("/users/login");
        }
    }

    return (
        <div>
            <h2 className="font-heading text-2xl font-bold">Your Profile</h2>
            <div className="p-5">
                <h3 className="font-heading text-l font-bold">Name:</h3>
                <p className="mb-4">
                    {user?.user_metadata.first_name} {user?.user_metadata.last_name}
                </p>
                <h3 className="font-heading text-l font-bold">Email:</h3>
                <p className="mb-4">
                    {user?.email}
                </p>
                {/* <h3 className="font-heading text-l font-bold">Color Palette:</h3>
                <p className="mb-4">
                    {getUserColorPalette(user?.id ?? "")}
                </p> */}
            </div>
            <button onClick={handleSignOut} className="p-6 bg-gray-300 rounded-xl hover:cursor-pointer hover:bg-gray-200">
                Log Out
            </button>
        </div>
    )
}