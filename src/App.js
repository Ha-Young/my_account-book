import React from 'react';
import { createGlobalStyle } from 'styled-components';
import AccountBookTemplate from './Components/AccountBookTemplate';
import AccountBookHead from './Components/AccountBookHead';
import AccountBookSelectCategory from './Components/AccountBookSelectCategory';

const GlobalStyle = createGlobalStyle`
  body{
    background-color: #dee2e6;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AccountBookTemplate>
        <AccountBookHead />
        <AccountBookSelectCategory />
      </AccountBookTemplate>
    </>
  );
}

export default App;
