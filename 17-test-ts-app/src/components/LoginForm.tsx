// LoginForm.tsx
import { useState } from "react";

function LoginForm({ onSubmit }: { onSubmit: (email: string) => void }) {
  const [email, setEmail] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(email);
      }}
    >
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일" />
      <button type="submit">로그인</button>
    </form>
  );
}

export default LoginForm;