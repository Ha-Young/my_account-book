import React, { useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { categorys } from '../../StaticDatas/staticDatas';
import MySelectBox from '../MySelectBox';
import MyButton from '../MyButton';
import { useRef } from 'react';
import useInputs from '../useInputs';

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

function AccountBookForm({ onConfirm, onCancel, create, update, updateObj }) {
  const categorys_left = categorys.filter(category => category.id !== 0);

  const initialText = updateObj ? updateObj.title : '';
  const initialPayment = updateObj ? parseInt(updateObj.amount) : 0;
  const initialCategory = updateObj
    ? categorys_left.find(category => category.id === updateObj.category)
    : categorys_left[0];

  const selectCategoryId = useRef(1);

  const [form, onChange, reset] = useInputs({
    title: initialText,
    payment: initialPayment,
  });

  const { title, payment } = form;

  const onSelectedChange = useCallback(
    selectId => {
      selectCategoryId.current = selectId;
    },
    [selectCategoryId]
  );

  const clickHandler = useCallback(
    e => {
      if (e.target.name === 'confirm') {
        const newAccountBook = {
          title,
          category: selectCategoryId.current,
          amount: parseInt(payment),
        };
        onConfirm(newAccountBook);
      } else {
        onCancel();
      }
      reset();
    },
    [onCancel, onConfirm, payment, reset, title]
  );

  return (
    <AccountBookFormBlock>
      <h2>
        지출
        {create && ' 등록'}
        {update && ' 수정'}
      </h2>
      <h3>내용</h3>
      <Input autoFocus name="title" value={title} onChange={onChange} />
      <h3>금액</h3>
      <Input type="number" name="payment" value={payment} onChange={onChange} />
      <h3>카테고리</h3>
      <MySelectBox
        options={categorys_left}
        value={initialCategory}
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
