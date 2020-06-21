import React from 'react';
import styled, { keyframes } from 'styled-components';
import AccountBookForm from './DialogsFormType/AccountBookForm';
import ConfirmForm from './DialogsFormType/ConfirmForm';

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const MyDialogBlock = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  h1 {
    margin: 0;
  }
  h3 {
    margin: 0;
  }

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

function MyDialog({ type, onConfirm, onCancel }) {
  return (
    <MyDialogBlock>
      {type === 'create' && (
        <AccountBookForm create onConfirm={onConfirm} onCancel={onCancel} />
      )}
      {type === 'update' && (
        <AccountBookForm update onConfirm={onConfirm} onCancel={onCancel} />
      )}
      {type === 'remove' && (
        <ConfirmForm
          text="정말 삭제하시겠습니까?"
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      )}
    </MyDialogBlock>
  );
}

export default MyDialog;
