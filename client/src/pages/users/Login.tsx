import AuthLayout from "../../components/auth/AuthLayout"
import LoginForm from "../../components/auth/LoginForm"

export default function Login() {
    return (
        <AuthLayout title="Sign In">
            <LoginForm />
            <div className="pl-3 pr-3">Don't have an account? <a href="./register" className="text-pink-600">Register Here</a> to save quiz results and inspiration photos!</div>
        </AuthLayout>
    )
}