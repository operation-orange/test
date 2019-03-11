import {
  FETCH,
  FETCH_SUCCESSFUL,
} from './actions';

export const initialState = {
  loading: false,
  list: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      return { ...state, loading: true };
    case FETCH_SUCCESSFUL:
      return { ...state, loading: false, list: action.payload };
    default:
      return state;
  }
};

export default reducer;
