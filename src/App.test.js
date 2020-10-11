import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders', () => {
  const { getByText } = render(<App />);
  const appElement = getByText(/Burger Builder/i);
  expect(appElement).toBeInTheDocument();
});
