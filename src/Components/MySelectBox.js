import React from 'react';
import styled from 'styled-components';
import { MdExpandMore } from 'react-icons/md';

const MySelectBoxBlock = styled.div`
  border: 1px solid black;

  display: flex;
  justify-content: space-around;
`;

function MySelectBox({ options }) {
  return (
    <MySelectBoxBlock>
      전체 <MdExpandMore />
    </MySelectBoxBlock>
  );
}

export default MySelectBox;
