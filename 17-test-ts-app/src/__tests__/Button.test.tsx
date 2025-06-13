// Button.test.tsx
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

test('버튼 텍스트 렌더링 테스트', () => {
  render(<Button>확인</Button>);
  const button = screen.getByText('확인');
  expect(button).toBeInTheDocument();
});