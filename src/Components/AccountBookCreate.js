import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import MySelectBox from './MySelectBox';
import MyButton from './MyButton';

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

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;

const InsertFormPositioner = styled.div`
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

const InsertForm = styled.form`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

function AccountBookCreate() {
  const [open, setOpen] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [paymentValue, setPaymentValue] = useState(0);
  const onToggle = () => setOpen(!open);

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <h2>지출등록</h2>
            <h3>내용</h3>
            <Input autoFocus value={textValue} />
            <h3>금액</h3>
            <Input value={paymentValue} />
            <h3>카테고리</h3>
            <MySelectBox />
            <ButtonGroup>
              <MyButton color="gray">취소</MyButton>
              <MyButton>등록</MyButton>
            </ButtonGroup>
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButtton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButtton>
    </>
  );
}

export default AccountBookCreate;
