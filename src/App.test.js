import { render, screen } from '@testing-library/react';
import App from './App';

test('Placeholder', () => {
  render(<App />);
  const linkElement = screen.getByText(/Placeholder/i);
  expect(linkElement).toBeInTheDocument();
});
