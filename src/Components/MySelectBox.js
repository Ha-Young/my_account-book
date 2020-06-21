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

  overflow: auto;

  ${props =>
    props.listview &&
    css`
      background: #868e96;
      cursor: default;
      color: white;
    `};
`;

const SelectBox = styled.div`
  padding: 2.8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${props =>
    props.listview
      ? css`
          background: #3b5bdb;
          margin-bottom: 2px;
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
  display: flex;
  justify-content: center;
  align-items: center;

  & + & {
    margin-top: 0.5rem;
  }

  &:hover {
    background: #748ffc;
  }
`;

function MySelectBox({ options, value, selectBoxStyle, listviewStyle }) {
  const [viewOption, setViewOption] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);
  const options_left = options.filter(
    option => option.id !== selectedOption.id
  );

  const toggleViewOption = () => {
    setViewOption(!viewOption);
  };

  const selectOption = e => {
    const selectedOptions = options.find(
      option => option.id === parseInt(e.target.id)
    );
    setSelectedOption(selectedOptions);
    toggleViewOption();
  };

  const viewStyle = viewOption ? listviewStyle : selectBoxStyle;

  return (
    <MySelectBoxBlock listview={viewOption} style={viewStyle}>
      <SelectBox listview={viewOption} onClick={toggleViewOption}>
        {selectedOption.text} <MdExpandMore />
      </SelectBox>
      <OptionList listview={viewOption}>
        {options_left &&
          options_left.map(option => (
            <Option key={option.id} id={option.id} onClick={selectOption}>
              {option.text}
            </Option>
          ))}
      </OptionList>
    </MySelectBoxBlock>
  );
}

MySelectBox.defaultProps = {
  selectBoxStyle: {
    width: '50px',
  },
  listviewStyle: {
    width: '70px',
  },
};

export default MySelectBox;
