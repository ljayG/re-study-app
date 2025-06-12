import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts/1')
.then(response => {
    console.log('GET 응답 데이터:', response.data);
})
.catch(error => {
    console.error('에러 발생:', error);
})