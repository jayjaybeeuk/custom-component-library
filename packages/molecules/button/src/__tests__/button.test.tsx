import { render, screen } from '@testing-library/react';
import { Button } from '../button';

describe('Button', () => {
  it('matches snapshot for default variant and medium padding', () => {
    const { asFragment } = render(<Button>Default Button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with specified variant and padding', () => {
    render(
      <Button variant="positive" padding="lg">
        Positive Button
      </Button>,
    );
    const button = screen.getByRole('button', { name: 'Positive Button' });
    expect(button).toBeInTheDocument();
  });

  it('disables the button when isDisabled is true', () => {
    render(<Button isDisabled>Disabled Button</Button>);
    const button = screen.getByRole('button', { name: 'Disabled Button' });
    expect(button).toBeDisabled();
  });

  it('renders with start and end icons', () => {
    render(
      <Button startIconName="Airplay" endIconName="Activity">
        Button with Icons
      </Button>,
    );
    const icons = screen.getAllByTestId('icon');
    expect(icons.length).toBe(2);
  });

  it('renders with loading icon', () => {
    render(<Button isLoading>Loading</Button>);
    const icons = screen.getAllByTestId('icon');
    expect(icons.length).toBe(1);
  });
});
