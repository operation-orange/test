export const UPDATE_FILTER_FORM = 'hotels/UPDATE_FILTER_FORM';
export const FILTER = 'hotels/FILTER';
export const FETCH = 'hotels/FETCH';
export const FETCH_SUCCESSFUL = 'hotels/FETCH_SUCCESSFUL';

export function updateFilterForm(payload) {
  return { type: UPDATE_FILTER_FORM, payload };
}

export function filterHotels() {
  return { type: FILTER };
}

export function fetchHotels() {
  return { type: FETCH };
}

export function fetchHotelsSuccessful(payload) {
  return { type: FETCH_SUCCESSFUL, payload };
}
