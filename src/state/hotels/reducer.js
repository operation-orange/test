import {
  UPDATE_FILTER_FORM,
  FILTER,
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
  filteredList: [],
};

const testName = (name, filter) => name.toLowerCase().includes(filter.toLowerCase());
const testRating = (rating, filter) => String(rating).includes(filter);
const testFacilities = (facilities, facility) => !facility || facilities.includes(facility);

const filterList = (list, {
  name,
  rating,
  facility,
}) => list.filter(
  hotel => testName(hotel.name, name)
  && testRating(hotel.rating, rating)
  && testFacilities(hotel.facilities, facility),
);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTER_FORM: {
      return { ...state, filterForm: { ...state.filterForm, ...action.payload } };
    }
    case FILTER: {
      const filteredList = filterList(state.list, state.filterForm);
      return {
        ...state, loading: false, filteredList,
      };
    }
    case FETCH: {
      return { ...state, loading: true };
    }
    case FETCH_SUCCESSFUL: {
      return {
        ...state, loading: false, list: action.payload, filteredList: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
