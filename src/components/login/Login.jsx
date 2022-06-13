import React from 'react';
import classes from './Login.module.scss';
import { Input, Button } from 'react-rainbow-components';


const Login = () => {

    const inputStyles = {
        width: '600px',
        paddingBottom: 32,
        paddingRight: 0,
        paddingLeft: 0,
        paddingTop: 0,
    };

    return (
        <div className={classes.wrapper} >
            <div className={classes.header}>
                <img className={classes.bubbles} src="bubbles.png" />
                <h1 className={classes.title}>Login to your account</h1>
                <img className={classes.star} src="star.png" />
                <div className={classes.form}>
                        <Input
                            label="Password"
                            labelAlignment="left"
                            type="password"
                            placeholder="Enter password"
                            className="rainbow-p-around_medium"
                            style={inputStyles}
                        />

                        <Input
                            label="Passport ID"
                            labelAlignment="left"
                            placeholder="Enter passport ID"
                            type="text"
                            className="rainbow-p-around_medium"
                            style={inputStyles}
                        />
                </div>
                <Button
                label="Continue"
                variant='brand'
                className={classes.button}
                />
                <img className={classes.arrow} src="arrow.png" />
            </div>
        </div>
    );
}

export default Login;
