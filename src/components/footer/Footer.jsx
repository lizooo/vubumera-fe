import React from 'react';
import classes from './Footer.module.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'react-rainbow-components';

const Footer = () => {
  function getCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  const userId = getCookie('passportId');

  const navigate = useNavigate();
  const location = useLocation();

  const isFooter =
    location.pathname !== '/register' &&
    location.pathname !== '/login' &&
    userId;

  const getLabel = () => {
    if (location.pathname === '/elections' || location.pathname === '/election')
      return 'Statistics';
    else if (location.pathname === '/statistics') return 'Elections';
  };

  const handleClick = () => {
    if (location.pathname === '/elections' || location.pathname === '/election')
      navigate('/statistics');
    else if (location.pathname === '/statistics') navigate('/elections');
  };

  return (
    <>
      {isFooter && (
        <div className={classes.wrapper}>
          <Button
            onClick={handleClick}
            variant="brand"
            className={classes.button}
          >
            {getLabel()}
            <img src="statistics.png" />
          </Button>
        </div>
      )}
    </>
  );
};

export default Footer;
