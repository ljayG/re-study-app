export type User = {
    name: string;
    email: string;
    age: number;
}

export default function UserCard({ name, email, age }: User ) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem'}}>
            <h2>{name} ({ age })</h2>
            <p>{email}</p>
        </div>
    )
}