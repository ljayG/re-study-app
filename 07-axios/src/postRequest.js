import axios from 'axios';

const postData = {
    title: 'React 학습하기',
    body: 'Axios로 POST 요청 실습하기',
    userId: 1,
};

axios.post('https://jsonplaceholder.typicode.com/posts', postData)
.then(response => {
    console.log('POST 응답 데이터:', response.data);
})
.catch(error => {
    console.error('에러 발생:', error);
});