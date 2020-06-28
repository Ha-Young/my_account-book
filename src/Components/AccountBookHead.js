import React from 'react';
import styled, { css } from 'styled-components';
import { useAccountBookState } from './AccountBookContext';

const AccountBookHeadBlock = styled.div`
  border-bottom: 1px solid #adb5bd;

  h1 {
    margin: 0;
    font-size: 36px;
  }

  .date {
    margin-top: 25px;
    font-size: 21px;
    font-weight: bold;
  }

  .all-payment {
    font-size: 21px;
    margin-top: 20px;
    margin-bottom: 25px;
    font-weight: bold;
  }
`;

const PaymentNum = styled.span`
  margin-left: 5px;
  color: #37b24d;
  ${props =>
    props.isMinus &&
    css`
      color: #f03e3e;
    `}
`;

function AccountBookHead() {
  const accountBooks = useAccountBookState();
  const allPayment = accountBooks.reduce(
    (accumulator, accountBook) => accumulator + accountBook.amount,
    0
  );

  const dateString = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <AccountBookHeadBlock>
      <h1>오늘의 지출</h1>
      <div className="date">{dateString}</div>
      <div className="all-payment">
        총 지출:
        <PaymentNum isMinus={allPayment !== 0}>{allPayment * -1} 원</PaymentNum>
      </div>
    </AccountBookHeadBlock>
  );
}

export default React.memo(AccountBookHead);
