import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

function App() {

  // 함수형/클래스형 컴포넌트
  // return (
  //   <div className="App">
  //     <FunctionalComponent />
  //     <ClassComponent />
  //   </div>
  // );

  // 함수형 컴포넌트
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
