import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import CurrencyInput from '../CurrencyInput';

describe('CurrencyInput', () => {
  it('should render a blank input', () => {
    const { container } = render(<CurrencyInput />);

    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render the inputted amount in the right currency format', () => {
    const { getByLabelText } = render(<CurrencyInput />);
    const input = getByLabelText('currency-input') as HTMLInputElement;

    fireEvent.change(input, { target: { value: '20000' } });

    expect(input.value).toBe('20,000');
  });

  it('should not allow letters to be inputted', () => {
    const { getByLabelText } = render(<CurrencyInput />);
    const input = getByLabelText('currency-input') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'one hundred' } });

    expect(input.value).toBe('');
  });
});
