import * as React from 'react';

import Header from '../../components/Header';
import CurrencyInput from '../../components/CurrencyInput';
import houseIcon from '../../icons/house.svg';
import arrowIcon from '../../icons/arrow.svg';

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

const SavingsGoal: React.FunctionComponent = () => {
  const [totalAmount, setTotalAmount] = React.useState<string>('');
  const [currentDate, setCurrentDate] = React.useState(new Date());

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
                  value={totalAmount}
                  onChange={handleInputChange}
                />
              </div>
            </TotalAmount>

            <ReachBy>
              <label htmlFor="reachby">Reach goal by</label>
              <div id="reachby">
                <button className="btn btn-prev" type="button">
                  <img src={arrowIcon} alt="Previous month" />
                </button>
                <div>
                  <p>
                    <strong>October</strong>
                  </p>
                  <p>
                    <span>2020</span>
                  </p>
                </div>
                <button className="btn btn-next" type="button">
                  <img src={arrowIcon} alt="Next month" />
                </button>
              </div>
            </ReachBy>
          </AmountSection>

          <Monthly>
            <div>
              <p>Monthly Amount</p>
              <p>$521</p>
            </div>

            <p>
              You’re planning <strong>48 monthly deposits</strong> to reach your{' '}
              <strong>$25,000</strong> goal by <strong>October 2020.</strong>
            </p>
          </Monthly>

          <ConfirmButton type="button">Confirm</ConfirmButton>
        </Card>
      </Content>
    </Container>
  );
};

export default SavingsGoal;
