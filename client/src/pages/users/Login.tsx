import AuthLayout from "../../components/auth/AuthLayout"
import LoginForm from "../../components/auth/LoginForm"

export default function Login() {
    return (
        <AuthLayout title="Sign In">
            <LoginForm />
            <div>Don't have an account? <a href="./register" className="text-pink-600">Register Here</a></div>
        </AuthLayout>
    )
}