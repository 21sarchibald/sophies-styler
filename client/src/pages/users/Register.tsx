import AuthLayout from "../../components/auth/AuthLayout"
import RegistrationForm from "../../components/auth/RegistrationForm"

export default function Register() {
    return (
        <AuthLayout title="Create an Account">
            <RegistrationForm />
        </AuthLayout>
    )
}