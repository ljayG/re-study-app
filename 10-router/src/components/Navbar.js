import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to='/'>홈</Link> |
            <Link to='/about'>소개</Link> |
            <Link to='/contact'>연락처</Link> |
            <Link to='/users/101'>유저 101 보기</Link>
        </nav>
    )
}

export default Navbar;