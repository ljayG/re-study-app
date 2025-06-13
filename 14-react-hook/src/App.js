import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import Timer from './components/Timer';
import FocusInput from './components/FocusInput';
import ResponsiveText from './components/ResponsiveText';
import ResponsiveComponent from './components/ResponsiveComponent';
import Settings from './components/Settings';

function App() {
  return (
    <div>
      <h1>React Hooks 실습</h1>
      <UserList />
      <Timer />
      <FocusInput />
      <ResponsiveText />
      <ResponsiveComponent />
      <Settings />
    </div>
  );
}

export default App;
