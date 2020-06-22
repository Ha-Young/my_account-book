import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import {
  useAccountBookDispatch,
  useAccountBookNextId,
} from './AccountBookContext';
import MyDialog from './MyDialog';

const CircleButtton = styled.button`
  background: #0c8599;
  &:hover {
    background: #15aabf;
  }
  &:active {
    background: #0b7285;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 2%;
  bottom: 2%;

  font-size: 60px;
  color: white;
  border-radius: 50%;

  border: none;
  outline: none;

  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: rotate(45deg);
    `}
`;

function AccountBookCreate() {
  const [open, setOpen] = useState(false);

  const dispatch = useAccountBookDispatch();
  const nextId = useAccountBookNextId();

  const onToggle = useCallback(() => setOpen(!open), [open]);

  const onCreate = useCallback(
    newAccountBook => {
      dispatch({
        type: 'CREATE',
        newAccountBook: { ...newAccountBook, id: nextId.current },
      });
      nextId.current += 1;
      setOpen(false);
    },
    [dispatch, nextId]
  );

  const onCancel = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      {open && (
        <MyDialog
          type="create"
          onConfirm={onCreate}
          onCancel={onCancel}
        ></MyDialog>
      )}
      <CircleButtton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButtton>
    </>
  );
}

export default React.useMemo(AccountBookCreate);
