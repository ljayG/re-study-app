// LoginForm.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from '../components/LoginForm';

test('이메일 입력 후 제출하면 콜백 호출됨', async () => {
  const mockSubmit = jest.fn();
  render(<LoginForm onSubmit={mockSubmit} />);
  await userEvent.type(screen.getByPlaceholderText('이메일'), 'test@example.com');
  await userEvent.click(screen.getByText('로그인'));
  expect(mockSubmit).toHaveBeenCalledWith('test@example.com');
});