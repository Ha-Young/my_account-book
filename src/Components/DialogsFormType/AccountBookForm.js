import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useAccountBookCategory } from '../AccountBookContext';
import MySelectBox from '../MySelectBox';
import MyButton from '../MyButton';
import { useRef } from 'react';

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;

const AccountBookFormBlock = styled.div`
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

function AccountBookForm({ onConfirm, onCancel, create, update }) {
  const [textValue, setTextValue] = useState('');
  const [paymentValue, setPaymentValue] = useState(0);
  const selectCategoryId = useRef(1);

  const textOnChange = e => setTextValue(e.target.value);
  const paymentOnChange = e => setPaymentValue(e.target.value);

  const categorys = useAccountBookCategory();
  const categorys_left = categorys.filter(category => category.id !== 0);

  const onSelectedChange = selectId => {
    selectCategoryId.current = selectId;
  };

  const clickHandler = e => {
    if (e.target.name === 'confirm') {
      const newAccountBook = {
        title: textValue,
        category: selectCategoryId.current,
        amount: parseInt(paymentValue),
      };
      onConfirm(newAccountBook);
    } else {
      onCancel();
    }
    setTextValue('');
    setPaymentValue(0);
  };

  return (
    <AccountBookFormBlock>
      <h2>
        지출
        {create && ' 등록'}
        {update && ' 수정'}
      </h2>
      <h3>내용</h3>
      <Input autoFocus value={textValue} onChange={textOnChange} />
      <h3>금액</h3>
      <Input type="number" value={paymentValue} onChange={paymentOnChange} />
      <h3>카테고리</h3>
      <MySelectBox
        options={categorys_left}
        value={categorys_left[0]}
        selectBoxStyle={{ width: '100%', fontSize: '18px' }}
        listviewStyle={{ width: '100%' }}
        onSelectedChange={onSelectedChange}
      />
      <ButtonGroup>
        <MyButton color="gray" name="cancel" onClick={clickHandler}>
          취소
        </MyButton>
        <MyButton name="confirm" onClick={clickHandler}>
          {create && ' 등록'}
          {update && ' 수정'}
        </MyButton>
      </ButtonGroup>
    </AccountBookFormBlock>
  );
}

export default AccountBookForm;
