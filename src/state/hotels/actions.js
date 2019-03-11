export const FETCH = 'hotels/FETCH';
export const FETCH_SUCCESSFUL = 'hotels/FETCH_SUCCESSFUL';

export function fetchHotels() {
  return { type: FETCH };
}

export function fetchHotelsSuccessful(payload) {
  return { type: FETCH_SUCCESSFUL, payload };
}
