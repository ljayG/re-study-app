import useLocalStorage from "../hooks/useLocalStorage";

function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <div>
      <p>현재 테마: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        테마 전환
      </button>
    </div>
  );
}

export default Settings;