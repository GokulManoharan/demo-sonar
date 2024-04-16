import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
  test('renders home page with correct description and links', () => {
    render(<Home />);
    
    // Check if the description is rendered correctly
    const descriptionElement = screen.getByText(/This is the home page of the application/i);
    expect(descriptionElement).toBeInTheDocument();

    // Check if all links are rendered correctly
    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.getAttribute('href')).toBe('/');
  });
});
