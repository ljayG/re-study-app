// Counter.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

test('버튼 클릭 시 count 증가', async () => {
  render(<Counter />);
  const button = screen.getByText('증가');
  await userEvent.click(button);
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});