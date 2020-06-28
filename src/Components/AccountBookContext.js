import React, {
  useReducer,
  createContext,
  useState,
  useContext,
  useRef,
} from 'react';

const initialAccountBooks = [
  // { id: 1, title: '용개반점', category: 1, amount: 7000 },
  // { id: 2, title: '양배추', category: 2, amount: 5000 },
  // { id: 3, title: '택시비', category: 3, amount: 20000 },
  // { id: 4, title: '관리비', category: 4, amount: 100000 },
  // { id: 5, title: '병원진료', category: 5, amount: 7000 },
];

function accountBookReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.newAccountBook);
    case 'REMOVE':
      return state.filter(accountBook => accountBook.id !== action.id);
    case 'UPDATE':
      console.log(action);
      return state.map(accountBook =>
        accountBook.id === action.updatedAccountBook.id
          ? action.updatedAccountBook
          : accountBook
      );
    default:
      throw new Error(
        `unhandled action in accountBookReducer. type : ${action.type}`
      );
  }
}

const AccountBookStateContext = createContext();
const AccountBookDispatchContext = createContext();
const AccountBookNextIdContext = createContext();
const AccountBookSelectCategoryContext = createContext();

export function AccountBookProvider({ children }) {
  const [state, dispatch] = useReducer(accountBookReducer, initialAccountBooks);
  const selectCategoryState = useState(0);
  const nextId = useRef(initialAccountBooks.length + 1);

  return (
    <AccountBookStateContext.Provider value={state}>
      <AccountBookDispatchContext.Provider value={dispatch}>
        <AccountBookNextIdContext.Provider value={nextId}>
          <AccountBookSelectCategoryContext.Provider
            value={selectCategoryState}
          >
            {children}
          </AccountBookSelectCategoryContext.Provider>
        </AccountBookNextIdContext.Provider>
      </AccountBookDispatchContext.Provider>
    </AccountBookStateContext.Provider>
  );
}

export function useAccountBookState() {
  const context = useContext(AccountBookStateContext);
  if (!context) {
    throw new Error('Cannot find AccountBookStateContext Provider');
  }
  return context;
}

export function useAccountBookDispatch() {
  const context = useContext(AccountBookDispatchContext);
  if (!context) {
    throw new Error('Cannot find AccountBookDispatchContext Provider');
  }
  return context;
}

export function useAccountBookNextId() {
  const context = useContext(AccountBookNextIdContext);
  if (!context) {
    throw new Error('Cannot find AccountBookNextIdContext Provider');
  }
  return context;
}

export function useAccountBookSelectedCategory() {
  const context = useContext(AccountBookSelectCategoryContext);
  if (!context) {
    throw new Error('Cannot find AccountBookSelectCategoryContext Provider');
  }
  return context;
}
