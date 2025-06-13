import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import useDetail from './pages/UserDetail';

function App() {

  // 1. 라우터 기초 예시
  // return (
  //   <BrowserRouter>
  //     {/* 여기에 라우트 구조가 들어갑니다 */}
  //     <nav>
  //       <Link to="/">홈</Link> | <Link to="/about">소개</Link>
  //     </nav>
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //     </Routes>
  //   </BrowserRouter>
  // );

  // 2. 실습
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/users/:id' element={<useDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;