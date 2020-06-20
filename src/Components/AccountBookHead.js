import React from 'react';
import styled, { css } from 'styled-components';

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
  return (
    <AccountBookHeadBlock>
      <h1>오늘의 지출</h1>
      <div className="date">2020년 6월 20일</div>
      <div className="all-payment">
        총 지출:
        <PaymentNum isMinus={false}>0 원</PaymentNum>
      </div>
    </AccountBookHeadBlock>
  );
}

export default AccountBookHead;
