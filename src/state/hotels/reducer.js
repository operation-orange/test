import {
  UPDATE_FILTER,
  FETCH,
  FETCH_SUCCESSFUL,
} from './actions';

export const initialState = {
  filterForm: {
    name: '',
    rating: '',
    facility: '',
  },
  loading: false,
  list: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return { ...state, filterForm: { ...state.filterForm, ...action.payload } };
    case FETCH:
      return { ...state, loading: true };
    case FETCH_SUCCESSFUL:
      return { ...state, loading: false, list: action.payload };
    default:
      return state;
  }
};

export default reducer;
