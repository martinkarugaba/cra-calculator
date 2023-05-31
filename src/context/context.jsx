import {
  createContext,
  useContext,
  useReducer,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';
import ACTIONS from './actions';

const defaultState = {
  data: null,
  loading: true,
  error: false,
  result: { total: null, next: null, operation: null },
};

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleClick = (buttonName) => {
    dispatch({ type: 'HANDLE_CLICK', payload: buttonName });
  };

  const fetchData = async () => {
    try {
      const url = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
      const apiKey = process.env.REACT_APP_QUOTES_API_KEY;
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': apiKey,
        },
      });
      const data = await response.json();
      console.log(data[0].quote);
      dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ACTIONS.FETCH_ERROR, payload: error.message });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
