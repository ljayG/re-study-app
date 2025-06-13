import { useEffect, useState } from "react";

export default function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
        }, []
    );

    return (
        <div>
            <h2>유저 목록</h2>
            <ul>
                {users.map(user => (
                    <li key={user.is}>
                        {user.name} ({user.email}) / {user.address.city}
                    </li>
                ))}
            </ul>
        </div>
    )
}