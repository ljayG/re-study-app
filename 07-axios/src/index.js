// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import axios from 'axios';

// Axios의 기본적인 GET 요청 예제
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));

// Axios의 POST 요청 보내기 예제
axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: '새로운 포스트',
  body: 'Axios를 활용한 POST 요청 예제입니다.',
  userId: 1
})
.then(response => console.log(response.data))
.catch(error => console.error(error));