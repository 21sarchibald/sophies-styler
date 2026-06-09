// import { Navigate } from 'react-router-dom'

// export default function ProtectedRoute({
//     children,
// }: {
//     children: React.ReactNode;
// }) {
//     const { user } = useAuth();

//     if (!user) {
//         return <Navigate to="/users/login" />;
//     }

//     return <>{children}</>
// }