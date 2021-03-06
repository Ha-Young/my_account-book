import React, { useState, useRef, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { MdExpandMore } from 'react-icons/md';

const MySelectBoxBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  border: 1px solid #adb5bd;
  border-radius: 3px;

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
  overflow-x: auto;
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

function MySelectBox({
  options,
  value,
  selectBoxStyle,
  listviewStyle,
  onSelectedChange,
}) {
  const [viewOption, setViewOption] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);
  const prevSelectedId = useRef(selectedOption.id);

  const options_left = options
    ? options.filter(option => option.id !== selectedOption.id)
    : null;

  const toggleViewOption = useCallback(() => {
    setViewOption(!viewOption);
  }, [viewOption]);

  if (options_left == null) return null;

  const selectOption = e => {
    const selectedOptions = options.find(
      option => option.id === parseInt(e.target.id)
    );
    setSelectedOption(selectedOptions);
    toggleViewOption();
    if (prevSelectedId !== selectedOptions.id) {
      onSelectedChange && onSelectedChange(selectedOptions.id);
      prevSelectedId.current = selectedOptions.id;
    }
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
    width: 'auto',
    fontSize: '14px',
    fontWeight: '400',
  },
  listviewStyle: {
    width: '70px',
    fontSize: '14px',
    fontWeight: '400',
  },
};

export default React.memo(MySelectBox);
