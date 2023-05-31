import ACTIONS from './actions';
import calculate from '../logic/calculate';

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.HANDLE_CLICK:
      return {
        ...state,
        result: calculate(state.result, action.payload),
      };
    case ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case ACTIONS.FETCH_ERROR:
      return {
        ...state,
        data: null,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
