import React, { useCallback } from 'react';
import styled from 'styled-components';
import MySelectBox from './MySelectBox';
import { useAccountBookSelectedCategory } from './AccountBookContext';
import { categorys } from '../StaticDatas/staticDatas';

const AccountBookSelectCategoryBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #adb5bd;

  padding: 15px 0px;
  font-size: 21px;
  font-weight: bold;

  span {
    margin-right: 10px;
  }
`;

function AccountBookSelectCategory() {
  const [_, setSelectCategory] = useAccountBookSelectedCategory();

  const onSelectedChange = useCallback(
    selectId => {
      setSelectCategory(selectId);
    },
    [setSelectCategory]
  );

  return (
    <AccountBookSelectCategoryBlock>
      <span>카테고리별로 보기:</span>
      {categorys && (
        <MySelectBox
          options={categorys}
          value={categorys[0]}
          onSelectedChange={onSelectedChange}
        />
      )}
    </AccountBookSelectCategoryBlock>
  );
}

export default React.memo(AccountBookSelectCategory);
