import { fetchPracticesPending, fetchPracticesSuccess, fetchPracticesError } from 'store/practices/actions/actions';

const appBase = process.env.REACT_APP_API_BASE_URL;

function fetchPractices() {
  return (dispatch) => {
    dispatch(fetchPracticesPending());
    fetch(`${appBase}/practices/upcoming`, {
      headers: {
        'Content-Type': 'application/json',
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
