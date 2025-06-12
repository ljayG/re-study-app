import { useState } from "react";

function EventInput() {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
        console.log('입력된 값', e.target.value);
    }

    return (
        <input
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="글자를 입력하세요"
        />
    );
}

export default EventInput;