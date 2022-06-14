import React from 'react';
import { Button } from 'react-rainbow-components';
import classes from './PermissionDenied.module.scss';
import { useNavigate } from 'react-router-dom';

const PermissionDenied = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register');
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <img className={classes.spark} src="spark.png" />
        <h1 className={classes.title}>Let's get to know your choice</h1>
        <img className={classes.home} src="home.png" />
        <div className={classes.permissionCard}>
          <img src="wBubbles.png" className={classes.bubbles} />
          <div className={classes.infoSection}>
            <img src="denied.png" />
            <div className={classes.text}>
              <h5>Great! Almost there!</h5>
              <h6>Your the qualified elections is waiting for you </h6>
            </div>
          </div>
          <Button
            label="Create Account"
            onClick={handleClick}
            className={classes.button}
          />
        </div>
      </div>
    </div>
  );
};

export default PermissionDenied;
