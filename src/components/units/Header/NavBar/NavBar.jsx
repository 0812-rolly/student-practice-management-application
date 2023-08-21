import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavBar.scss';

let text;

function NavBar({ navbarItems, handlerUpdateNavbarLogout, isUserLogged }) {
  text = useSelector((state) => state.user.siteText.navBar);

  return (
    <div className="navbar-items">
      <ul className="navbar-items__nav-menu">
        {navbarItems.map((item) => (
          <li key={item.title}>
            <Link className="navbar-items__links link" to={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
      {isUserLogged
        ? (
          <Link to="/">
            <button
              className="navbar-items__button button"
              type="button"
              onClick={handlerUpdateNavbarLogout}
            >
              {text.logout}
            </button>
          </Link>
        )
        : (
          <Link to="/login">
            <button
              className="navbar-items__button button"
              type="button"
            >
              {text.login}
            </button>
          </Link>
        )}
    </div>
  );
}

const navItemsPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

NavBar.propTypes = {
  navbarItems: PropTypes.arrayOf(navItemsPropType).isRequired,
  handlerUpdateNavbarLogout: PropTypes.func.isRequired,
  isUserLogged: PropTypes.bool.isRequired,
};

export default NavBar;
