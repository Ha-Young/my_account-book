import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdExpandMore } from 'react-icons/md';

const MySelectBoxBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  border: 1px solid #adb5bd;
  border-radius: 3px;
  margin-left: 10px;

  font-size: 14px;
  font-weight: 400;
`;

const SelectBox = styled.div`
  padding: 2.8px;
  ${props =>
    props.listview
      ? css`
          background: #3b5bdb;
          cursor: default;
          &:hover {
            background: #3b5bdb;
          }
        `
      : css`
          cursor: pointer;
          &:hover {
            background: #748ffc;
          }
        `};
`;

const OptionList = styled.ul`
  font-size: 14px;
  list-style: none;
  margin: 0;
  padding: 0;
  ${props =>
    props.listview
      ? css`
          display: block;
        `
      : css`
          display: none;
        `};
`;

const Option = styled.li`
  cursor: pointer;
  &:hover {
    background: #748ffc;
  }
`;

function MySelectBox({ options, value }) {
  const [viewOption, setViewOption] = useState(false);
  const [selected, setSelected] = useState(value);

  const toggleViewOption = () => {
    setViewOption(!viewOption);
  };

  const selectOption = e => {
    setSelected(e.target.innerHTML);
    toggleViewOption();
  };

  return (
    <MySelectBoxBlock>
      <SelectBox listview={viewOption} onClick={toggleViewOption}>
        {selected} <MdExpandMore />
      </SelectBox>
      <OptionList listview={viewOption}>
        {options.map((option, index) => (
          <Option key={index} onClick={selectOption}>
            {option}
          </Option>
        ))}
      </OptionList>
    </MySelectBoxBlock>
  );
}

export default MySelectBox;
