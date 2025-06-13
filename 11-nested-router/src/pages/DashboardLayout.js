
// src/pages/DashboardLayout.js
import { Link, Outlet, Navigate } from 'react-router-dom';

export default function DashboardLayout() {

    // 인증정보를 체크하는 로직(토큰.. 정보 재 확인)
    const isLoggedIn = false;

    return isLoggedIn ? (
        <div>
        <h2>📊 대시보드</h2>
        <nav>
            <Link to="profile">프로필</Link> | <Link to="settings">설정</Link>
        </nav>
        <Outlet />
        </div>
    ) : (
        <Navigate to='/login' replace />
    );
}