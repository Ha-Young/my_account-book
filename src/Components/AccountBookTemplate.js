import React from 'react';
import styled from 'styled-components';

const AccountBookTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

  margin: 0 auto;
  margin-top: 64px;
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;

  padding: 50px;
`;

function AccountBookTemplate({ children }) {
  return <AccountBookTemplateBlock>{children}</AccountBookTemplateBlock>;
}

export default AccountBookTemplate;
