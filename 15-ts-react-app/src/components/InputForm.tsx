import { useState, ChangeEvent } from "react";

export default function InputForm() {
    const [value, setValue] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div style={{ marginTop: '2rem' }}>
            <input type="text" onChange={handleChange} placeholder="입력하세요" />
            <p>입력한 값: {value}</p>
        </div>
    )
}