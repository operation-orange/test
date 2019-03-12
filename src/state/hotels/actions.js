export const UPDATE_FILTER = 'hotels/UPDATE_FILTER';
export const FETCH = 'hotels/FETCH';
export const FETCH_SUCCESSFUL = 'hotels/FETCH_SUCCESSFUL';

export function updateFilterForm(payload) {
  return { type: UPDATE_FILTER, payload };
}

export function fetchHotels() {
  return { type: FETCH };
}

export function fetchHotelsSuccessful(payload) {
  return { type: FETCH_SUCCESSFUL, payload };
}
