import Wallet from '../components/Wallet';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('Test wallet connection button toggle', () => {
  render(<Wallet />);
  const toggleButton = screen.getByText(/Connect/i);
  userEvent.click(toggleButton);
  expect(toggleButton).toHaveTextContent(/You are connected/i);
});
