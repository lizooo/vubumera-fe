import React, { useState } from 'react';
import classes from './Register.module.scss';
import {
  Input,
  DatePicker,
  Picklist,
  Option,
  Button,
} from 'react-rainbow-components';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const inputStyles = {
    width: '300px',
    paddingBottom: 32,
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 0,
  };

  const selectStyles = {
    paddingBottom: '32px',
    paddingRight: '15px',
    paddingLeft: '15px',
    width: '300px',
  };

  const [dateState, setDateState] = useState();
  const [locationState, setLocationState] = useState();
  const [emailState, setEmailState] = useState();
  const [passwordState, setPassworState] = useState();
  const [passroetIdState, setPassportIdState] = useState();
  const [nameState, setNameState] = useState();

  const handleRegister = () => {
    const data = {
      email: emailState,
      full_name: nameState,
      password: passwordState,
      passport_id: passroetIdState,
      birthdate: JSON.stringify(dateState).replace(/['"]+/g, ''),
      location: { city: locationState.label },
    };

    fetch('http://127.0.0.1:8000/api/voter/register/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(text);
          });
        }
        navigate('/login');
        return response.json();
      })
      .catch((error) => {
        console.log(error);
        return Promise.reject();
      });
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <img className={classes.bubbles} src="bubbles.png" />
        <h1 className={classes.title}>Create your account</h1>
        <img className={classes.star} src="star.png" />
        <div className={classes.form}>
          <div className="rainbow-align-content_center rainbow-flex_wrap">
            <Input
              label="Full Name"
              labelAlignment="left"
              placeholder="Enter full name"
              type="text"
              className="rainbow-p-around_medium"
              style={inputStyles}
              onChange={(value) => setNameState(value.target.value)}
            />

            <Input
              label="Email"
              labelAlignment="left"
              type="email"
              placeholder="email@example.com"
              className="rainbow-p-around_medium"
              style={inputStyles}
              onChange={(value) => setEmailState(value.target.value)}
            />
          </div>
          <div className="rainbow-align-content_center rainbow-flex_wrap">
            <Input
              label="Password"
              labelAlignment="left"
              type="password"
              placeholder="Enter password"
              className="rainbow-p-around_medium"
              style={inputStyles}
              onChange={(value) => setPassworState(value.target.value)}
            />

            <Input
              label="Passport ID"
              labelAlignment="left"
              placeholder="Enter passport ID"
              type="text"
              className="rainbow-p-around_medium"
              style={inputStyles}
              onChange={(value) => setPassportIdState(value.target.value)}
            />
          </div>
          <div className="rainbow-align-content_center rainbow-flex_wrap">
            <Picklist
              id="picklist-1"
              labelAlignment="left"
              style={selectStyles}
              onChange={(value) => setLocationState(value)}
              value={locationState}
              label="Select location"
            >
              <Option
                name="header"
                label="Available locations"
                variant="header"
              />
              <Option name="Cherkasy" label="Cherkasy" />
              <Option name="Chernihiv" label="Chernihiv" />
              <Option name="Chernivtsi" label="Chernivtsi" />
              <Option name="Dnipro" label="Dnipro" />
              <Option name="Dnipro" label="Dnipro" />
              <Option name="Ivano-Frankivsk" label="Ivano-Frankivsk" />
              <Option name="Kharkiv" label="Kharkiv" />
              <Option name="Kherson" label="Kherson" />
              <Option name="Khmelnytsk" label="Khmelnytsk" />
              <Option name="Kropyvnytskyi" label="Kropyvnytskyi" />
              <Option name="Kyiv" label="Kyiv" />
              <Option name="Luhansk" label="Luhansk" />
              <Option name="Lviv" label="Lviv" />
              <Option name="Odesa" label="Odesa" />
              <Option name="Poltava" label="Poltava" />
              <Option name="Rivne" label="Rivne" />
              <Option name="Sumy" label="Sumy" />
              <Option name="Ternopil" label="Ternopil" />
              <Option name="Vinnytsya" label="Vinnytsya" />
              <Option name="Lutsk" label="Lutsk" />
              <Option name="Uzhgorod" label="Uzhgorod" />
              <Option name="Zaporizhzhya" label="Zaporizhzhya" />
              <Option name="Zhytomyr" label="Zhytomyr" />
            </Picklist>
            <DatePicker
              value={dateState}
              labelAlignment="left"
              placeholder="Select date"
              minDate={new Date(1900, 1, 1)}
              maxDate={new Date(2004, 1, 1)}
              label="Date of birth"
              onChange={(value) => setDateState(value)}
              style={selectStyles}
            />
          </div>
        </div>
        <Button
          label="Let’s Start"
          variant="brand"
          className={classes.button}
          onClick={handleRegister}
        />
        <img className={classes.arrow} src="arrow.png" />
      </div>
    </div>
  );
};

export default Register;
