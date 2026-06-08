import AuthLayout from "../../components/auth/AuthLayout"
import LoginForm from "../../components/auth/LoginForm"

export default function Login() {
    return (
        <AuthLayout title="Sign In">
            <LoginForm />
        </AuthLayout>
    )
}