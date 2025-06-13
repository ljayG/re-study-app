import './App.css';
import UserCard from './components/UserCard';
import Counter from './components/Counter';
import InputForm from './components/InputForm';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>👤 사용자 목록</h1>
      <UserCard name="홍길동" email="hong@example.com" />
      <UserCard name="김철수" email="kim@example.com" />
      <h2>TypeScript 실습</h2>
      <Counter />
      <InputForm />
    </div>
  );
}

export default App;
