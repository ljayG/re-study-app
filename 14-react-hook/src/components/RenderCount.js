import { useRef, useState, useEffect } from 'react';

function RenderCount() {
  const countRef = useRef(0);
  const [input, setInput] = useState('');

  useEffect(() => {
    countRef.current++;
  }, [])

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <p>렌더링 횟수: {countRef.current}</p>
    </div>
  );
}

export default RenderCount;