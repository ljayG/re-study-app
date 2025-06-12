import './App.css';
import InputEvent from './component/InputEvent';
import NameForm from './component/NameForm';
import EventButton from './component/EventButton';
import EventInput from './component/EventInput';

function App() {

  // 1. 이벤트 핸들링
  // return (
  //   <div className="App">
  //     <InputEvent />
  //   </div>
  // );

  // 2. 폼처리
  // return (
  //   <div className="App">
  //     <NameForm />
  //   </div>
  // );

  // 3. 버튼클릭 이벤트 실습
  // return (
  //   <div className="App">
  //     <EventButton />
  //   </div>
  // );

  // 4. 입력폼 이벤트 실습
  return (
    <div className="App">
      <EventInput />
    </div>
  );
}

export default App;
