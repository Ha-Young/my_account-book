import React from 'react';
import styled from 'styled-components';
import MySelectBox from './MySelectBox';

const AccountBookSelectCategoryBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #adb5bd;

  padding: 15px 0px;
  font-size: 21px;
  font-weight: bold;
`;

function AccountBookSelectCategory() {
  const options = ['전체', '식사', '식료품', '교통', '생활', '의료'];
  return (
    <AccountBookSelectCategoryBlock>
      카테고리별로 보기:
      <MySelectBox options={options} value={options[0]} />
    </AccountBookSelectCategoryBlock>
  );
}

export default AccountBookSelectCategory;
