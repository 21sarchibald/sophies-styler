import { signOut } from "../../services/authService"
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

    const navigate = useNavigate();
    async function handleSignOut() {
        const error = await signOut();

        if (error) {
            console.log("error logging out");
            return;
        } else {
            navigate("/users/login");
        }

    }

    return (
        <div>
            <div>User profile info - currently named dashboard</div>
        {/* the onclick for this button should be the logout function :) */}
        <button onClick={handleSignOut}>Log Out</button>
        </div>
    )
}