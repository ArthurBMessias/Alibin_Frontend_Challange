import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Test component DropDownCoditions', () => {
  it('Dropdown button exists', () => {
    render(<App />);
    const dropDownButton = screen.getByRole('button');
    expect(dropDownButton).toBeInTheDocument();
  });

});
