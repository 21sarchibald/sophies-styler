import AuthLayout from "../../components/auth/AuthLayout"
import RegistrationForm from "../../components/auth/RegistrationForm"

export default function Register() {
    return (
        <AuthLayout title="Create an Account">
            <RegistrationForm />
            <div>Already have an account? <a href="./login" className="text-pink-600">Login Here</a></div>
        </AuthLayout>
    )
}