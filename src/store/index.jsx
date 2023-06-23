import { createContext, useReducer, useContext } from 'react';
import reducer from './reducer';

const AppContext = createContext();

const initialState = {
  candidates: [
    {
      id: 1,
      name: 'Don Julio',
      votes: 0,
      percentage: 0,
    },
    {
      id: 2,
      name: 'Jhonny Walker',
      votes: 0,
      percentage: 0,
    },
    {
      id: 3,
      name: 'Jack Daniels',
      votes: 0,
      percentage: 0,
    },
    {
      id: 4,
      name: 'Jose Cuervo',
      votes: 0,
      percentage: 0,
    },
  ],
  totalVotes: 0,
  resultType: 'total',
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const store = {
    state,
    dispatch,
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export const useVoting = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('useSelector must be used within a AppProvider');
  }

  return context;
};

// export const useDispatch = () => {
//   const context = useContext(AppContext);

//   if (context === undefined) {
//     throw new Error('useDispatch must be used within a AppProvider');
//   }

//   return context.dispatch;
// };
