import * as React from 'react';

import originLogo from '../../icons/logo.svg';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={originLogo} alt="Origin logo" />
    </Container>
  );
};

export default Header;
