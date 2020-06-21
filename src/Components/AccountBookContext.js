import React, {
  useReducer,
  createContext,
  useState,
  useContext,
  useRef,
} from 'react';

const initialAccountBooks = [
  { id: 1, title: '용개반점', category: 1, amount: 7000 },
  { id: 2, title: '양배추', category: 2, amount: 5000 },
  { id: 3, title: '택시비', category: 3, amount: 20000 },
  { id: 4, title: '관리비', category: 4, amount: 100000 },
  { id: 5, title: '병원진료', category: 5, amount: 7000 },
];

const categorys = [
  { id: 0, text: '전체', color: '#e7f5ff' },
  { id: 1, text: '식사', color: '#ffec99' },
  { id: 2, text: '식료품', color: '#d8f5a2' },
  { id: 3, text: '교통', color: '#ffc078' },
  { id: 4, text: '생활', color: '#da77f2' },
  { id: 5, text: '의료', color: '#4dabf7' },
];

function accountBookReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.accountBook);
    case 'REMOVE':
      return state.filter(accountBook => accountBook.id !== action.id);
    case 'UPDATE':
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
const AccountBookCategoryContext = createContext();
const AccountBookSelectCategoryContext = createContext();
const AccountBookSetSelectCategoryContext = createContext();

export function AccountBookProvider({ children }) {
  const [state, dispatch] = useReducer(accountBookReducer, initialAccountBooks);
  const selectCategoryState = useState(0);
  const nextId = useRef(initialAccountBooks.length + 1);

  return (
    <AccountBookStateContext.Provider value={state}>
      <AccountBookDispatchContext.Provider value={dispatch}>
        <AccountBookNextIdContext.Provider value={nextId}>
          <AccountBookCategoryContext.Provider value={categorys}>
            <AccountBookSelectCategoryContext.Provider
              value={selectCategoryState}
            >
              {children}
            </AccountBookSelectCategoryContext.Provider>
          </AccountBookCategoryContext.Provider>
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

export function useAccountBookCategory() {
  const context = useContext(AccountBookCategoryContext);
  if (!context) {
    throw new Error('Cannot find AccountBookCategoryContext Provider');
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
