import React from 'react';
import classes from './Header.module.scss';
import { Button } from 'react-rainbow-components';



const Header = () => {
    return (
        <div className={classes.wrapper}>
          <img src="logo.png"/>
          <Button
            shaded
            label="Login"
            variant="border"
            className="rainbow-m-around_medium"
            size='small'
        />
        </div>
    );
}

export default Header;
