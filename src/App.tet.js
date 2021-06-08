import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders learn react link', () => {
  render(<App />);

  expect(screen.getByText(/Favourite/i)).toBeInTheDocument;
  expect(screen.getByText("Favourite")).toBeInTheDocument

  // const linkElement = screen.getByText(/Favourite/i);
  // console.log(linkElement)
  // expect(linkElement).toBeInTheDocument();
});
