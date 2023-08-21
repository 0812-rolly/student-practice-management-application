import { fetchPracticePending, fetchPracticeSuccess, fetchPracticeError } from 'store/formPractice/actions/actions';
import createNotification from 'common/helpers/notifications/notifications';
import { ACCESS_TOKEN } from 'common/config/index';

const appBase = process.env.REACT_APP_API_BASE_URL;

function fetchFormPractice(data) {
  return (dispatch) => {
    dispatch(fetchPracticePending());
    fetch(`${appBase}/practices`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw (response.error);
        }
        dispatch(fetchPracticeSuccess(response));
        createNotification('success', 'Your request has been send!');
      })
      .catch((error) => {
        dispatch(fetchPracticeError(error));
        createNotification('error', 'Error! Your request has not been send');
      });
  };
}

export default fetchFormPractice;
