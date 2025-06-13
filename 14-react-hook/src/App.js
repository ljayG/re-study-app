import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import UserList from './components/UserList';
import Timer from './components/Timer';
import FocusInput from './components/FocusInput';
import ResponsiveText from './components/ResponsiveText';
import ResponsiveComponent from './components/ResponsiveComponent';
import Settings from './components/Settings';
import RenderCount from './components/RenderCount';

function App() {
  const [ visible, setVisible ] = useState(true);

  return (
    <div>
      <h1>React Hooks 실습</h1>
      <UserList />
      <button onClick={() => setVisible(!visible)}>
        {visible ? '타이머제거' : '타이머'}
      </button>
      {visible && <Timer /> }
      <FocusInput />
      <ResponsiveText />
      <ResponsiveComponent />
      <Settings />
      <RenderCount />
    </div>
  );
}

export default App;
