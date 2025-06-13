type User = {
    name: string;
    email: string;
}

export default function UserCard({ name, email }: User ) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem'}}>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}