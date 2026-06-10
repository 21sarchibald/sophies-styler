import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/useAuth';

export default function ProtectedRoute({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/users/login" />;
    }

    return <>{children}</>
}