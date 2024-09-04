import { render, screen } from '@testing-library/react';
import { Icon } from '../icon';

describe('Icon', () => {
  it('matches snapshot', () => {
    render(<Icon name="Airplay" />);
    expect(screen.getByTestId('icon')).toMatchInlineSnapshot(`
      <svg
        class="root"
        data-testid="icon"
        fill="none"
        height="18px"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        width="18px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
        />
        <polygon
          points="12 15 17 21 7 21 12 15"
        />
      </svg>
    `);
  });

  it('sets the correct size based on the "size" prop', () => {
    const { rerender } = render(<Icon name="AlertCircle" size="sm" />);
    let icon = screen.getByTestId('icon');
    expect(icon).toHaveAttribute('width', '16px');

    rerender(<Icon name="AlertCircle" size="md" />);
    icon = screen.getByTestId('icon');
    expect(icon).toHaveAttribute('width', '18px');
  });

  it('applies custom class names if provided', () => {
    const customClassName = 'custom-class';
    render(<Icon name="Airplay" className={customClassName} />);

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveClass(customClassName);
  });
});
