import React from 'react';
import styled from 'styled-components';
import AccountBookItem from './AccountBookItem';

const AccountBoodListBlock = styled.div`
  flex: 1;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function AccountBoodList({ categorys }) {
  return (
    <AccountBoodListBlock>
      <AccountBookItem
        categorys={categorys}
        category={1}
        text="용개반점"
        payment="7000"
      />
    </AccountBoodListBlock>
  );
}

export default AccountBoodList;
