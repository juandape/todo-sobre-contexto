import { createContext, useReducer, useContext } from 'react';
import reducer from './reducer';

const AppContext = createContext();

const initialState = {
  name: null,
  votecounter: 0,
  totalvotes: 0,
  isLoading: false,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const store = {
    state,
    dispatch,
  };

  return (
    <AppContext.Provider value={store}>
      {children}
    </AppContext.Provider>
  );
};

export const useSelector = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('useSelector must be used within a AppProvider');
  }

  return context.state;
};

export const useDispatch = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('useDispatch must be used within a AppProvider');
  }

  return context.dispatch;
};
