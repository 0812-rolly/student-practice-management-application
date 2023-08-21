import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CONFIG } from 'common/config/configRole';
import { logoutUser } from '../../../store/user/utils';
import NavBar from './NavBar/NavBar';
import LinkedLogo from './LinkedLogo/LinkedLogo';
import './Header.scss';

function Header() {
  const dispatch = useDispatch();
  const isUserLogged = useSelector((state) => state.user.isUserLogged);
  const role = useSelector((state) => state.user.role);
  const links = CONFIG[role];
  const handlerUpdateNavbarLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div className="header">
      <LinkedLogo />
      <NavBar
        navbarItems={isUserLogged ? links : []}
        handlerUpdateNavbarLogout={handlerUpdateNavbarLogout}
        isUserLogged={isUserLogged}
      />
    </div>
  );
}

export default Header;
