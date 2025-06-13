import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'; 
import DashboardLayout from './pages/DashboardLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Nav from './components/Nav';
import LoginRedirect from './pages/LoginRedirect';

function App() {
 
  return (
    <BrowserRouter>
      <Nav />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="/private" element={<LoginRedirect />} />
      <Route path="/login" element={<h2>🔒 로그인 페이지</h2>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;