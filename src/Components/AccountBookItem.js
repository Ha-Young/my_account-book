import React from 'react';
import styled, { css } from 'styled-components';
import { MdCreate, MdDelete } from 'react-icons/md';

const Category = styled.div`
  padding: 13px 20px;
  background-color: ${props => props.color || '#ffffff'};
  border-radius: 10px;
  font-size: 19px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Text = styled.div`
  flex: 1;
  color: #495057;
`;

const Payment = styled.div`
  color: #f03e3e;

  margin-right: 20px;
`;

const Update = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const AccountBookItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;

  font-size: 24px;
  font-weight: bold;
`;

function AccountBookItem({ categorys, category, title, amount }) {
  const categoryObj = categorys.find(
    categoryElement => categoryElement.id === category
  );

  return (
    <AccountBookItemBlock>
      <Category color={categoryObj.color}>{categoryObj.text}</Category>
      <Text>{title}</Text>
      <Payment>{amount !== 0 ? '-' + amount : '0'} 원</Payment>
      <Update>
        <MdCreate />
      </Update>
      <Remove>
        <MdDelete />
      </Remove>
    </AccountBookItemBlock>
  );
}

export default AccountBookItem;
