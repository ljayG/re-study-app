// src/pages/Dashboard.js
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div>
      <h2>대시보드</h2>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
}