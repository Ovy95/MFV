import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { HomePage } from '../containers/homepage';

describe('Testing the starter App with enzyme and jest', () => {
  test('Test for H1 Tag text', () => {
    const { getByText } = render(<HomePage />);
    const linkElement = getByText(/Favourite language Checker/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('Test for H3 Tag text', () => {
    const { getByText } = render(<HomePage />);
    const linkElement = getByText(/Enter a Github Username/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('Test for SubmitButton text', () => {
    const { getByText } = render(<HomePage />);
    const linkElement = getByText(/Submit/i);
    expect(linkElement).toBeInTheDocument();
  });
});
