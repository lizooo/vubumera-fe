import React from 'react';
import classes from './Footer.module.scss';
import { useNavigate, useLocation  } from "react-router-dom";
import { Button } from 'react-rainbow-components';


const Footer = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const isFooter = location.pathname !== '/register' && location.pathname !== '/login';

  const getLabel = () => {
    if(location.pathname === '/elections' || location.pathname === '/election') return 'Statistics'
    else if (location.pathname === '/statistics') return 'Elections'
  }

  const handleClick = () => {
    if(location.pathname === '/elections' || location.pathname === '/election') navigate('/statistics')
    else if (location.pathname === '/statistics') navigate('/elections')
  }

    return (
      <>
       { isFooter && <div className={classes.wrapper}>
          <Button 
          onClick={handleClick}
          variant="brand"
          className={classes.button}
          >{getLabel()}<img src="statistics.png" /></Button>
        </div>}
        </>
    );
}

export default Footer;
