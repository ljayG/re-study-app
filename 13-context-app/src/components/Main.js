import { useContext } from "react";
import { ThemeContext, useTheme } from "../context/ThemeContext";

function Main() {
    // 기존
    // const { theme, toggleTheme } = useContext(ThemeContext);
    
    // 실습 변경
    const { theme, toggleTheme } = useTheme();

    return (
        <div style={{
                backgroundColor: theme === 'light' ? '#fff' : '#333',
                color: theme ===  'light' ? '#000' : '#fff',
                padding: '2rem',
            }}
        >
            <h1>현재 테마: {theme}</h1>
            <button onClick={toggleTheme}>테마 변경</button>

        </div>
    )
}

export default Main;