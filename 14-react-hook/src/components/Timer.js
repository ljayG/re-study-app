import { useEffect, useState } from 'react';

export default function Timer() {
    const [count, setCount ] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log('타이머 정리됨');
        }
    }, []);

    return <h2>{count}초 경과</h2>
}