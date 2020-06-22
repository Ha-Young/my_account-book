import React, { useState } from 'react';
import styled from 'styled-components';
import { MdCreate, MdDelete } from 'react-icons/md';
import {
  useAccountBookCategory,
  useAccountBookDispatch,
} from './AccountBookContext';
import MyDialog from './MyDialog';

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

function AccountBookItem({ id, title, amount, category }) {
  const categorys = useAccountBookCategory();

  const categoryObj = categorys.find(
    categoryElement => categoryElement.id === category
  );

  const [removeOpen, setRemoveOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const dispatch = useAccountBookDispatch();

  const onRemoveClick = () => setRemoveOpen(!removeOpen);
  const onUpdateClick = () => setUpdateOpen(!updateOpen);

  const onRemoveConfirm = () => {
    dispatch({ type: 'REMOVE', id });
    setRemoveOpen(false);
  };

  const onRemoveCancel = () => {
    setRemoveOpen(false);
  };

  const onUpdateConfirm = updatedAccountBook => {
    updatedAccountBook = { id, ...updatedAccountBook };
    dispatch({ type: 'UPDATE', updatedAccountBook });
    setUpdateOpen(false);
  };

  const onUpdateCancel = () => {
    setUpdateOpen(false);
  };

  return (
    <>
      {removeOpen && (
        <MyDialog
          type="remove"
          onConfirm={onRemoveConfirm}
          onCancel={onRemoveCancel}
        />
      )}
      {updateOpen && (
        <MyDialog
          type="update"
          onConfirm={onUpdateConfirm}
          onCancel={onUpdateCancel}
          updateObj={{ id, title, amount, category }}
        />
      )}
      <AccountBookItemBlock>
        <Category color={categoryObj.color}>{categoryObj.text}</Category>
        <Text>{title}</Text>
        <Payment>{amount !== 0 ? '-' + amount : '0'} 원</Payment>
        <Update onClick={onUpdateClick}>
          <MdCreate />
        </Update>
        <Remove onClick={onRemoveClick}>
          <MdDelete />
        </Remove>
      </AccountBookItemBlock>
    </>
  );
}

export default AccountBookItem;
