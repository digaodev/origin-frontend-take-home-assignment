import * as React from 'react';

import GlobalStyles from './styles/global';
import SavingsGoal from './pages/SavingsGoal';

const App: React.FunctionComponent = () => {
  return (
    <>
      <GlobalStyles />

      <SavingsGoal />
    </>
  );
};

export default App;
