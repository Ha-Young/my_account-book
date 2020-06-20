import React from 'react';
import styled from 'styled-components';

const AccountBookHeadBlock = styled.div`
  padding: 32px 48px 32px 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .date {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  .all-payment {
    color: #ff8787;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function AccountBookHead() {
  return (
    <AccountBookHeadBlock>
      <h1>오늘의 지출</h1>
      <div className="date">2020년 6월 20일</div>
      <div className="all-payment">총 지출: -139000 원</div>
    </AccountBookHeadBlock>
  );
}

export default AccountBookHead;
