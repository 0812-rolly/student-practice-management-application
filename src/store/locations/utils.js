import { fetchLocationsPending, fetchLocationsSuccess, fetchLocationsError } from 'store/locations/actions/actions';

const appBase = process.env.REACT_APP_API_BASE_URL;

function fetchLocations(queryParams = '') {
  return (dispatch) => {
    dispatch(fetchLocationsPending());
    fetch(`${appBase}/practice_locations${queryParams}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchLocationsSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchLocationsError(error));
      });
  };
}

export default fetchLocations;
