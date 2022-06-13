import React, { useState } from 'react';
import classes from './Login.module.scss';
import { Input, Button } from 'react-rainbow-components';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const inputStyles = {
    width: '600px',
    paddingBottom: 32,
    paddingRight: 0,
    paddingLeft: 0,
    paddingTop: 0,
  };

  const [emailState, setEmailState] = useState();
  const [passwordState, setPasswordState] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  function setCookie(name, value, days) {
    var expires = '';
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
  }

  const handleLogin = () => {
    const body = {
      password: passwordState,
      email: emailState,
    };

    fetch('http://127.0.0.1:8000/api/voter/login/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            setError(
              text === '{"email":["Enter a valid email address."]}'
                ? 'No account associated with this email'
                : 'Please enter valid credentials'
            );
            throw new Error(text);
          });
        }

        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson);
        setCookie('passportId', responseJson.id, 1);
        navigate('/elections');
      })
      .catch((error) => {
        console.error(error);
        return Promise.reject();
      });
  };

  return (
    <div className={classes.wrapper}>
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
            onChange={(value) => {
              setPasswordState(value.target.value);
              setError(undefined);
            }}
          />

          <Input
            label="Email"
            labelAlignment="left"
            placeholder="Enter email"
            type="text"
            className="rainbow-p-around_medium"
            style={inputStyles}
            onChange={(value) => {
              setEmailState(value.target.value);
              setError(undefined);
            }}
          />
        </div>
        {error && <div className={classes.error}>{error}</div>}
        <Button
          label="Continue"
          variant="brand"
          className={classes.button}
          onClick={handleLogin}
          disabled={!emailState || !passwordState}
        />
        <img className={classes.arrow} src="arrow.png" />
      </div>
    </div>
  );
};

export default Login;
