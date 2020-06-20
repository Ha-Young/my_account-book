import React from 'react';
import { createGlobalStyle } from 'styled-components';
import AccountBookTemplate from './Components/AccountBookTemplate';
import AccountBookHead from './Components/AccountBookHead';

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
      </AccountBookTemplate>
    </>
  );
}

export default App;
