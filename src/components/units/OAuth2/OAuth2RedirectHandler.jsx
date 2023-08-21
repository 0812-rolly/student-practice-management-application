import React, { useEffect } from 'react';

import { Redirect } from 'react-router-dom';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import createNotification from 'common/helpers/notifications/notifications';
import { loginUser } from '../../../store/user/utils';

let text;

function OAuth2RedirectHandler() {
  const token = queryString.parse(window.location.search);

  const { isUserLogged } = useSelector((state) => state.user);
  text = useSelector((state) => state.user.siteText.request_form.notifications);

  useEffect(() => {
    if (isUserLogged) {
      createNotification('success', text.loginNotification);
    }
  }, [isUserLogged]);

  if (token.token) {
    const dispatch = useDispatch();
    dispatch(loginUser(token.token));
    return (
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    );
  }
}

export default OAuth2RedirectHandler;
