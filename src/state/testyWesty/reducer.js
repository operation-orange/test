import {
  LOAD,
} from './actions';

export const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return { ...state, data: ['testy', 'westy'] };
    default:
      return state;
  }
};

export default reducer;
