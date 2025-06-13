import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
      >
        홈
      </NavLink>{' '}
      |{' '}
      <NavLink
        to="/about"
        style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
      >
        소개
      </NavLink>{' '}
      |{' '}
      <NavLink
        to="/dashboard"
        style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
      >
        대시보드
      </NavLink>{' '}
      |{' '}
      <NavLink
        to="/login"
        style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
      >
        로그인
      </NavLink>
    </nav>
  );
}