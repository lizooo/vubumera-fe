import React from 'react';
import classes from './Header.module.scss';
import { Button } from 'react-rainbow-components';
import { useNavigate, useLocation  } from "react-router-dom";



const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    function eraseCookie(name) {   
        document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    const getLabel = () => {
        if (!isLoggedIn || location.pathname === 'register') return 'Signin'
        else if (location.pathname === 'login') return 'Signup'
        else if (isLoggedIn) return 'Logout'
    }

    const isLoggedIn = !!getCookie('passportId');

    const handleButtonClick = () => {
        if (isLoggedIn) {
            eraseCookie('passportId');
            console.log('erasing....')
            navigate('/login');

        } else if (!isLoggedIn || location.pathname === 'register') {
            navigate('/login');
        } else if (location.pathname === 'login')  navigate('/register');
    }

    return (
        <div className={classes.wrapper}>
          <img src="logo.png"/>
          <Button
            shaded
            label={getLabel()}
            variant="border"
            className="rainbow-m-around_medium"
            size='small'
            onClick={handleButtonClick}
        />
        </div>
    );
}

export default Header;
