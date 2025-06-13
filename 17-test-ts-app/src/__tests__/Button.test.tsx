// Button.test.tsx
test('버튼 클릭 시 콜백 함수 호출됨', async () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>클릭</Button>);
  const button = screen.getByText('클릭');
  await userEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});