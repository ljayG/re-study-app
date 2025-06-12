import { useState } from "react";

function CounterHooks() {
    const [count, setState] = useState(0);

    return (
        <div>
            <h2>함수형 카운터 (Hooks) : {count}</h2>
            <button onClick={() => setState(count + 1)}>+1 증가</button>
            <button onClick={() => setState(count - 1)}>-1 감소</button>
        </div>
    )
}

export default CounterHooks;