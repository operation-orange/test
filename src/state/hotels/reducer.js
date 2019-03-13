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
    facilities: [],
  },
  loading: false,
  list: [],
  filteredList: [],
  availableFacilities: [],
};

const testName = (name, filter) => name.toLowerCase().includes(filter.toLowerCase());
const testRating = (rating, filter) => String(rating).includes(filter);
const testFacilities = (facilities, filter) => !filter.length || filter.reduce((acc, item) => {
  if (!facilities.includes(item)) {
    return false;
  }

  return acc;
}, true);

export const filterList = (list, {
  name,
  rating,
  facilities,
}) => list.filter(
  hotel => testName(hotel.name, name)
  && testRating(hotel.rating, rating)
  && testFacilities(hotel.facilities, facilities),
);

// I don't like this. More time and I'd look into something clearer
export const availableFacilities = hotels => (
  [...new Set(hotels.reduce((acc, hotel) => acc.concat(hotel.facilities), []))]
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
      const facilities = availableFacilities(action.payload);
      return {
        ...state,
        loading: false,
        list: action.payload,
        filteredList: action.payload,
        availableFacilities: facilities,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
