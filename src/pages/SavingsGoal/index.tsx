import * as React from 'react';

import Header from '../../components/Header';
import CurrencyInput from '../../components/CurrencyInput';
import houseIcon from '../../icons/house.svg';
import arrowIcon from '../../icons/arrow.svg';
import * as dateUtils from '../../utils/dates';

import {
  Container,
  Content,
  Card,
  AmountSection,
  TotalAmount,
  ReachBy,
  Monthly,
  ConfirmButton
} from './styles';

interface KeyboardEvent {
  key: string;
}

const SavingsGoal: React.FunctionComponent = () => {
  const [totalAmount, setTotalAmount] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [month, setMonth] = React.useState('');
  const [year, setYear] = React.useState('');
  const [numberOfMonths, setNumberOfMonths] = React.useState(0);
  const [monthlyAmount, setMonthlyAmount] = React.useState(0);

  const handleIncrementMonth = React.useCallback(() => {
    const newDate = dateUtils.add1Month(selectedDate);

    setSelectedDate(newDate);
  }, [selectedDate]);

  const handleDecrementMonth = React.useCallback(() => {
    if (selectedDate < new Date()) {
      return;
    }
    const newDate = dateUtils.sub1Month(selectedDate);

    setSelectedDate(newDate);
  }, [selectedDate]);

  React.useEffect(() => {
    function handleKeyPress(e: KeyboardEvent): void {
      if (e.key === 'ArrowLeft') {
        handleDecrementMonth();
      } else if (e.key === 'ArrowRight') {
        handleIncrementMonth();
      }
    }

    window.addEventListener('keydown', handleKeyPress);

    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleDecrementMonth, handleIncrementMonth]);

  React.useEffect(() => {
    const month = dateUtils.getMonth(selectedDate);
    const year = dateUtils.getYear(selectedDate);
    const numMonths = dateUtils.monthsFromNow(selectedDate);

    let amount;
    if (totalAmount !== '' && numMonths > 0)
      amount = parseFloat(totalAmount.replace(/,/g, '')) / numMonths;
    else {
      amount = 0;
    }

    setMonth(month);
    setYear(year);
    setNumberOfMonths(numMonths);
    setMonthlyAmount(amount);
  }, [selectedDate, totalAmount]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTotalAmount(e.target.value);
  };

  return (
    <Container>
      <Header />

      <Content>
        <h1>
          Let&apos;s plan your <strong>saving goal.</strong>
        </h1>

        <Card>
          <img src={houseIcon} alt="Buy a house" />

          <h2>Buy a house</h2>
          <h3>Saving goal</h3>

          <AmountSection>
            <TotalAmount>
              <label htmlFor="total">Total amount</label>
              <div>
                <span>$</span>
                <CurrencyInput
                  id="total"
                  name="total"
                  aria-label="Total amount"
                  value={totalAmount}
                  onChange={handleInputChange}
                />
              </div>
            </TotalAmount>

            <ReachBy>
              <label htmlFor="reachby">Reach goal by</label>
              <div id="reachby">
                <button
                  className="btn btn-prev"
                  type="button"
                  aria-label="Previous month"
                  onClick={handleDecrementMonth}
                >
                  <img src={arrowIcon} alt="Previous month" />
                </button>
                <div>
                  <p>
                    <strong data-testid="month-label">{month}</strong>
                  </p>
                  <p>
                    <span>{year}</span>
                  </p>
                </div>
                <button
                  className="btn btn-next"
                  type="button"
                  aria-label="Next month"
                  onClick={handleIncrementMonth}
                >
                  <img src={arrowIcon} alt="Next month" />
                </button>
              </div>
            </ReachBy>
          </AmountSection>

          <Monthly>
            <div>
              <p>Monthly Amount</p>
              <p aria-label="Monthly amount">
                {monthlyAmount.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD'
                })}
              </p>
            </div>

            <p aria-label="Savings summary">
              You’re planning <strong>{numberOfMonths} monthly deposits</strong>{' '}
              to reach your <strong>${totalAmount || 0}</strong> goal by{' '}
              <strong>
                {month} {year}.
              </strong>
            </p>
          </Monthly>

          <ConfirmButton type="button">Confirm</ConfirmButton>
        </Card>
      </Content>
    </Container>
  );
};

export default SavingsGoal;
