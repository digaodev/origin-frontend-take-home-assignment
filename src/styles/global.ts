import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body {
    background: #F4F8FA;
    color: #1C1E1F;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
  }

  h1,h2,h3,h4,h5,h6,strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  strong {
    font-weight: bold;
  }

  input {
    background: #FFFFFF;
    border: 1px solid #E1E8ED;
    border-radius: 0 4px 4px 0;
    font-size: 20px;
    font-weight: 600;
    height: 60px;
    letter-spacing: -0.166667px;
    line-height: 24px;
    padding: 16px 0 16px 16px;
    width: 100%;
  }
`;
