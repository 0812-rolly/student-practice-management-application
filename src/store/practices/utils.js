import { fetchPracticesPending, fetchPracticesSuccess, fetchPracticesError } from 'store/practices/actions/actions';
import { ACCESS_TOKEN } from 'common/config/index';

const appBase = process.env.REACT_APP_API_BASE_URL;

function fetchPractices(queryParams = '') {
  return (dispatch) => {
    dispatch(fetchPracticesPending());
    fetch(`${appBase}/practices${queryParams}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchPracticesSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchPracticesError(error));
      });
  };
}

export default fetchPractices;
