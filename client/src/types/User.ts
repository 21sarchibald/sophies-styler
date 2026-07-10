export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    createdAt: string;
    user_metadata: {
        first_name: string;
        last_name: string;
    }
    // aud: string;
    // created_at: string;
}