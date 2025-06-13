// src/pages/LoginRedirect.js
import { Navigate } from 'react-router-dom';

export default function LoginRedirect() {
  const isLoggedIn = false;

  return isLoggedIn ? (
    <p>✅ 로그인 완료</p>
  ) : (
    <Navigate to="/login" replace />
  );
}