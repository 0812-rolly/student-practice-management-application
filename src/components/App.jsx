import React from 'react';
import {
  BrowserRouter as Router, Switch, Redirect,
} from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { useSelector } from 'react-redux';
import { ROLES } from 'common/config/configRole';
import { NotificationContainer } from 'react-notifications';
import createNotification from 'common/helpers/notifications/notifications';
import Home from './pages/Home/Home';
import Request from './pages/Request/Request';
import Login from './pages/Login/Login';
import OAuth2RedirectHandler from './units/OAuth2/OAuth2RedirectHandler';
import Profile from './pages/Profile/Profile';
import Practices from './pages/Practices/Practices';
import Practice from './pages/Practice/Practice';
import Header from './units/Header/Header';

let isUserLogged;
let role;
const requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    if (isUserLogged) {
      if (to.meta.allowedRoles.includes(role)) {
        next();
      } else {
        next.redirect('/');
        createNotification('warning', 'Access denied. You do not have enough rights to access this page!');
      }
    } else {
      next.redirect('/');
      createNotification('warning', 'Для перехода на данную страницу пройдите, пожалуйста, авторизацию!');
    }
  } else {
    next();
  }
};
function App() {
  isUserLogged = useSelector((state) => state.user.isUserLogged);
  role = useSelector((state) => state.user.role);
  return (
    <Router>
      <GuardProvider guards={[requireLogin]} loading={null} error={null}>
        <Header />
        <Switch>
          <GuardedRoute path="/" exact component={Home} />
          <GuardedRoute path="/login" exact component={Login} />
          <GuardedRoute path="/request" exact component={Request} />
          <GuardedRoute path="/oauth2/redirect" exact component={OAuth2RedirectHandler} />
          <GuardedRoute path="/profile/:profileId?" exact component={Profile} meta={{ auth: true, allowedRoles: [ROLES.MENTOR, ROLES.USER, ROLES.HR] }} />
          <GuardedRoute path="/practices" exact component={Practices} meta={{ auth: true, allowedRoles: [ROLES.HR] }} />
          <GuardedRoute path="/practices/:practiceId" exact component={Practice} meta={{ auth: true, allowedRoles: [ROLES.MENTOR, ROLES.USER, ROLES.HR] }} />
          <Redirect to="/" />
        </Switch>
      </GuardProvider>
      <NotificationContainer />
    </Router>
  );
}

export default App;
