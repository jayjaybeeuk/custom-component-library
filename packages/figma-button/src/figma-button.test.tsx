import React from 'react';
import { render, screen } from '@testing-library/react';
import { FigmaButton } from './figma-button';

describe('Button', () => {
  it('renders a button element', () => {
    render(<FigmaButton text="click me" />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
