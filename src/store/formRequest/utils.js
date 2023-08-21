import createNotification from 'common/helpers/notifications/notifications';
import { fetchRequestPending, fetchRequestSuccess, fetchRequestError } from 'store/formRequest/actions/actions';

const appBase = process.env.REACT_APP_API_BASE_URL;

function fetchFormRequest(formData, textNotif) {
  return (dispatch) => {
    dispatch(fetchRequestPending());
    fetch(`${appBase}/student_practice_requests`, {
      method: 'POST',
      header: {
        'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary1IaJSABOsHrCGf1R',
      },
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw (response.error);
        }
        dispatch(fetchRequestSuccess(response));
        createNotification('success', textNotif.submitNotification.success);
      })
      .catch((error) => {
        dispatch(fetchRequestError(error));
        createNotification('error', textNotif.submitNotification.error);
      });
  };
}

export default fetchFormRequest;
