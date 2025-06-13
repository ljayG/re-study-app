function Message({ isLoggedIn }: { isLoggedIn: boolean }) {
  return <div>{isLoggedIn ? 'Welcome!' : 'Please login'}</div>;
}

export default Message;