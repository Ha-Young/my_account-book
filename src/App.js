import React from 'react';
import { createGlobalStyle } from 'styled-components';
import AccountBookTemplate from './Components/AccountBookTemplate';
import AccountBookHead from './Components/AccountBookHead';
import AccountBookSelectCategory from './Components/AccountBookSelectCategory';
import AccountBookList from './Components/AccountBookList';
import AccountBookCreate from './Components/AccountBookCreate';
import { AccountBookProvider } from './Components/AccountBookContext';

const GlobalStyle = createGlobalStyle`
  body{
    background-color: #dee2e6;
  }
`;

function App() {
  return (
    <AccountBookProvider>
      <GlobalStyle />
      <AccountBookTemplate>
        <AccountBookHead />
        <AccountBookSelectCategory />
        <AccountBookList />
        <AccountBookCreate />
      </AccountBookTemplate>
    </AccountBookProvider>
  );
}

export default App;
