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

const categorys = [
  { id: 0, text: '전체', color: '#e7f5ff' },
  { id: 1, text: '식사', color: '#ffec99' },
  { id: 2, text: '식료품', color: '#d8f5a2' },
  { id: 3, text: '교통', color: '#ffc078' },
  { id: 4, text: '생활', color: '#da77f2' },
  { id: 5, text: '의료', color: '#4dabf7' },
];

function App() {
  return (
    <AccountBookProvider>
      <GlobalStyle />
      <AccountBookTemplate>
        <AccountBookHead />
        {/* <AccountBookSelectCategory />
        <AccountBookList />
        <AccountBookCreate /> */}
      </AccountBookTemplate>
    </AccountBookProvider>
  );
}

export default App;
