import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Message from '../components/Message';

test('로그인 상태에 따라 다른 메시지 표시', () => {
  render(<Message isLoggedIn={true} />);
  expect(screen.getByText('Welcome!')).toBeInTheDocument();
  render(<Message isLoggedIn={false} />);
  expect(screen.getByText('Please login')).toBeInTheDocument();
});