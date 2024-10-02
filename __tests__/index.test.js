import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('should render heading food repo', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Food Repo/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('should render a heading fruits', () => {
    render(<Home />);

    const subheading = screen.getByRole('heading', {
      name: /Fruits/i,
    });

    expect(subheading).toMatchInlineSnapshot(`
<h2
  class="m-3"
>
  Fruits
</h2>
`);
  });
});
