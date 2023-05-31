import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';

const defaultState = {
  result: { total: null, next: null, operation: null },
};

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleClick = (buttonName) => {
    dispatch({ type: 'HANDLE_CLICK', payload: buttonName });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        handleClick,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContext;
