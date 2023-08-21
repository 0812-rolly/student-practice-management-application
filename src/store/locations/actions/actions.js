import { FETCH_LOCATIONS_PENDING, FETCH_LOCATIONS_SUCCESS, FETCH_LOCATIONS_ERROR } from './actionsTypes';

export function fetchLocationsPending() {
  return {
    type: FETCH_LOCATIONS_PENDING,
  };
}

export function fetchLocationsSuccess(locations) {
  return {
    type: FETCH_LOCATIONS_SUCCESS,
    locations,
  };
}

export function fetchLocationsError(error) {
  return {
    type: FETCH_LOCATIONS_ERROR,
    error,
  };
}
