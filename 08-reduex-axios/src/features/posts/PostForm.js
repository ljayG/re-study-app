import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from './postsSlice';

function PostForm() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ title }));
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="제목 입력" />
      <button type="submit">작성</button>
    </form>
  );
}

export default PostForm;