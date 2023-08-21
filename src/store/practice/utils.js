import getPracticeByIdSelector from 'store/practices/selectors';
import { ACCESS_TOKEN } from 'common/config/index';
import { getPracticePending, getPracticeSuccess, getPracticeError } from 'store/practice/actions/actions';

const appBase = process.env.REACT_APP_API_BASE_URL;

function getPracticeById(practices, id) {
  return (dispatch) => {
    dispatch(getPracticePending());
    const practiceFromState = getPracticeByIdSelector(practices, id);
    if (practiceFromState) {
      dispatch(getPracticeSuccess(practiceFromState));
      return practiceFromState;
    }
    return fetch(`${appBase}/practices/${id}`, {
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
        dispatch(getPracticeSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(getPracticeError(error));
      });
  };
}

export default getPracticeById;
