import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <h2>🔢 카운터: {count}</h2>
            <button onClick={() => setCount(count + 1)}>+1 증가</button>
        </div>
    )
}