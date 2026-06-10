interface AuthLayoutProps {
    title: string;
    children: React.ReactNode;
}

export default function AuthLayout({title, children}: AuthLayoutProps) {
    return (
        <div className="mx-auto text-center">
            <h2 className="font-heading text-2xl mx-auto font-bold">{title}</h2>
            {children}
        </div>
    )
}