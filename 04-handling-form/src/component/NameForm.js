import { useState } from "react";

function NameForm() {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`입력한 이름: ${name}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">제출</button>
            </label>
        </form>
    )
}

export default NameForm;