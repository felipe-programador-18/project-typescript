import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('render another component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Inside here is my insights/i);
  expect(linkElement).toBeInTheDocument();
});


