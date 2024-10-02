import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Layout from './layout';

describe('Layout', () => {
  it('renders the nav link food.com', () => {
    render(<Layout />);

    const navLink = screen.getByRole('link', {
      name: /food.com/i,
    });

    expect(navLink).toMatchSnapshot();
  });
});
