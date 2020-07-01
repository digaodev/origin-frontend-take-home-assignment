import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import SavingsGoal from '../SavingsGoal';

describe('SavingsGoal', () => {
  it('should render without errors', () => {
    const { container } = render(<SavingsGoal />);

    expect(container).toBeTruthy();
  });

  it('should only allow the selection of future dates', () => {
    const { getByLabelText, getByTestId } = render(<SavingsGoal />);

    const monthLabel = getByTestId('month-label');
    const currentMonth = new Date().toLocaleString('en-us', {
      month: 'long'
    });

    const previousButton = getByLabelText('Previous month');

    expect(monthLabel).toHaveTextContent(currentMonth);

    fireEvent.click(previousButton);

    expect(monthLabel).toHaveTextContent(currentMonth);
  });

  it('should select the next and previous months by clicking the buttons', () => {
    const { getByLabelText, getByTestId } = render(<SavingsGoal />);

    const monthLabel = getByTestId('month-label');
    const currentMonth = new Date().toLocaleString('en-us', {
      month: 'long'
    });

    const previousButton = getByLabelText('Previous month');
    const nextButton = getByLabelText('Next month');

    expect(monthLabel).toHaveTextContent(currentMonth);

    fireEvent.click(nextButton);

    expect(monthLabel).not.toHaveTextContent(currentMonth);

    fireEvent.click(previousButton);

    expect(monthLabel).toHaveTextContent(currentMonth);
  });

  it('should select the next and previous months using the keyboard', () => {
    const { getByLabelText, getByTestId } = render(<SavingsGoal />);

    const monthLabel = getByTestId('month-label');
    const currentMonth = new Date().toLocaleString('en-us', {
      month: 'long'
    });

    const previousButton = getByLabelText('Previous month');
    const nextButton = getByLabelText('Next month');

    expect(monthLabel).toHaveTextContent(currentMonth);

    fireEvent.keyDown(nextButton, { key: 'ArrowRight' });

    expect(monthLabel).not.toHaveTextContent(currentMonth);

    fireEvent.keyDown(previousButton, { key: 'ArrowLeft' });

    expect(monthLabel).toHaveTextContent(currentMonth);
  });

  it('should correctly calculate the monthly amount', () => {
    const { getByLabelText } = render(<SavingsGoal />);

    const totalAmountInput = getByLabelText('Total amount');
    const nextButton = getByLabelText('Next month');
    const monthlyAmountText = getByLabelText('Monthly amount');

    fireEvent.change(totalAmountInput, { target: { value: '30000.50' } });

    fireEvent.click(nextButton);

    expect(monthlyAmountText).toHaveTextContent('$30,000.50');

    fireEvent.click(nextButton);

    expect(monthlyAmountText).toHaveTextContent('$15,000.25');
  });

  it('should render the correct summary message for the informed savings options', () => {
    const { getByLabelText } = render(<SavingsGoal />);

    const totalAmountInput = getByLabelText('Total amount');
    const nextButton = getByLabelText('Next month');
    const summaryText = getByLabelText('Savings summary');

    fireEvent.change(totalAmountInput, { target: { value: '30000' } });

    fireEvent.click(nextButton);

    fireEvent.click(nextButton);

    expect(summaryText).toMatchInlineSnapshot(`
      <p
        aria-label="Savings summary"
      >
        You’re planning 
        <strong>
          2
           monthly deposits
        </strong>
         
        to reach your 
        <strong>
          $
          30,000
        </strong>
         goal by
         
        <strong>
          September
           
          2020
          .
        </strong>
      </p>
    `);
  });
});
