import React, { useState } from 'react';
import styled from 'styled-components';
import AccountBookItem from './AccountBookItem';
import {
  useAccountBookState,
  useAccountBookSelectedCategory,
  useAccountBookDispatch,
} from './AccountBookContext';
import MyDialog from './MyDialog';

const AccountBookListBlock = styled.div`
  flex: 1;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function AccountBookList() {
  const accountBooks = useAccountBookState();
  const [selectedCategory, _] = useAccountBookSelectedCategory();

  const filteredAccountBooks =
    selectedCategory === 0
      ? accountBooks
      : accountBooks.filter(
          accountBook => accountBook.category === selectedCategory
        );

  return (
    <AccountBookListBlock>
      {filteredAccountBooks.map(accountBook => (
        <AccountBookItem
          id={accountBook.id}
          key={accountBook.id}
          category={accountBook.category}
          title={accountBook.title}
          amount={accountBook.amount}
        />
      ))}
    </AccountBookListBlock>
  );
}

export default AccountBookList;
