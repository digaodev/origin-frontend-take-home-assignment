import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  max-width: 560px;

  h1 {
    color: #1b31a8;
    font-size: 18px;
    letter-spacing: -0.225px;
    line-height: 26px;
    margin: 24px 0;
    text-align: center;
  }

  @media (min-width: 600px) {
    margin: 0 auto 32px auto;

    h1 {
      font-size: 24px;
      letter-spacing: -0.2px;
      line-height: 32px;
    }
  }
`;

export const Card = styled.article`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 16px rgba(225, 232, 237, 0.8);
  padding: 32px 24px;

  > img {
    margin-bottom: 6px;
  }

  h2 {
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.2px;
    line-height: 32px;
  }

  h3 {
    color: #657786;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 36px;
  }

  @media (min-width: 600px) {
    padding: 48px 40px;

    h2 {
      font-size: 32px;
      letter-spacing: -0.266667px;
      line-height: 40px;
    }

    h3 {
      font-size: 16px;
    }
  }
`;

export const AmountSection = styled.section`
  display: flex;
  flex-direction: column;

  margin-bottom: 30px;

  label {
    display: block;
    line-height: 20px;
    margin-bottom: 4px;
  }

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const TotalAmount = styled.div`
  margin-bottom: 16px;

  div {
    display: flex;
    align-items: center;

    span {
      display: inline-block;
      background: #f4f8fa;
      border: 1px solid #e1e8ed;
      border-radius: 4px 0px 0px 4px;
      color: #657786;
      font-size: 22px;
      line-height: 26px;
      letter-spacing: -0.183333px;
      padding: 16px 20px;
    }
  }

  @media (min-width: 600px) {
    margin-bottom: 0;
    margin-right: 16px;
  }
`;

export const ReachBy = styled.div`
  > div {
    display: flex;
    align-items: center;

    min-width: 260px;

    .btn {
      background: #e1e8ed;
      border: none;
      padding: 20px;

      transition: background-color 0.2s;

      &:hover {
        background-color: #d6dfe6;
      }
    }

    .btn-prev {
      border-radius: 4px 0px 0px 4px;
    }

    .btn-next {
      border-radius: 0px 4px 4px 0px;

      img {
        transform: rotateY(180deg);
      }
    }

    & > div {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      border: 1px solid #e1e8ed;
      height: 59px;
      padding: 0 32px;
      width: 100%;
    }
  }
`;

export const Monthly = styled.div`
  background: #f4f8fa;
  border: 1px solid #e1e8ed;
  box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
  border-radius: 4px;
  margin-bottom: 36px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #ffffff;
    border-radius: 4px 4px 0 0;
    padding: 20px 24px;

    p + p {
      color: #0079ff;
      font-size: 26px;
      letter-spacing: -0.216667px;
      line-height: 32px;
      margin-left: 16px;
      text-align: right;

      @media (min-width: 600px) {
        font-size: 40px;
      }
    }

    @media (min-width: 600px) {
      font-size: 18px;
    }
  }

  > p {
    padding: 20px 24px;
  }
`;

export const ConfirmButton = styled.button`
  background: #1b31a8;
  border: none;
  border-radius: 32px;
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  padding: 16px;
  width: 100%;

  transition: background-color 0.2s;

  &:hover {
    background-color: #2a5db0;
  }
`;
