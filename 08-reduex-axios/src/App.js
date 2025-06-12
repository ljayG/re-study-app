import logo from './logo.svg';
import './App.css';
import PostsList from './features/posts/PostsList';
import PostForm from './features/posts/PostForm';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>📝 게시판</h1>
      <PostForm />
      <PostsList />
    </div>
  );
}

export default App;
