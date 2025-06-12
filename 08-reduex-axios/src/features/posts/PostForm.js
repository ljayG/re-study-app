import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from './postsSlice';

function PostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ title, body }));
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
        <button type="submit">작성</button><br />
        
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="제목 입력" />
        <br />
        <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="내용 입력" />
    </form>
  );
}

export default PostForm;