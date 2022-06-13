import React, { useContext } from 'react';
import classes from './Header.module.scss';
import { Button } from 'react-rainbow-components';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setAuth, auth } = useContext(AuthContext);

  function eraseCookie(name) {
    document.cookie =
      name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  const getLabel = () => {
    if (location.pathname === '/register') return 'Signin';
    else if (location.pathname === '/login') return 'Signup';
    else if (!isLoggedIn) return 'SignUp';
    else if (isLoggedIn) return 'Logout';
  };

  const isLoggedIn = !!auth;

  const handleButtonClick = () => {
    if (isLoggedIn) {
      eraseCookie('passportId');
      navigate('/login');
      setAuth(undefined);
    } else if (location.pathname === '/register') {
      navigate('/login');
    } else if (location.pathname === '/login') {
      navigate('/register');
    } else if (!isLoggedIn) navigate('/register');
  };

  return (
    <div className={classes.wrapper}>
      <img src="logo.png" />
      <Button
        shaded
        label={getLabel()}
        variant="border"
        className="rainbow-m-around_medium"
        size="small"
        onClick={handleButtonClick}
      />
    </div>
  );
};

export default Header;
