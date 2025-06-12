import './App.css';
import User from './components/User';
import CounterClass from './components/CounterClass';
import CounterHooks from './components/CounterHooks';
import TodoList from './components/TodoList';

function App() {
  // 1. props 실습
  // return (
  //   <div className="App">
  //     <User name="홍길동" age={28} location="종로" />
  //     <User name="김철수" age={35} location="혜화" />
  //   </div>
  // );

  // 2. State 실습
  // return (
  //   <div className='App'>
  //     <CounterClass />
  //     <CounterHooks />
  //   </div>
  // )

  // 3. Props와 State 조합 실습(TodoList)
  const initialTodos = ['React 공부하기', '운동하기'];

  return (
    <div className='App'>
      <TodoList initialTodos={initialTodos} />
    </div>
  )

}

export default App;
