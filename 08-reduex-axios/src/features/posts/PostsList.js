import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, deletePost, updatePost } from './postsSlice';

function PostsList() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러: {error}</p>;

  return (
    <ul>
      {items.map(post => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => dispatch(deletePost(post.id))}>삭제</button>
          <button onClick={() => dispatch(updatePost(post))}>수정</button>
        </li>
      ))}
    </ul>
  );
}

export default PostsList;