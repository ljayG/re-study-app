import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Main from './components/Main';


function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}

export default App;
