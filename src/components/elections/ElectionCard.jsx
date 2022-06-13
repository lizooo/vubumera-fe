import React from 'react';
import { Button } from 'react-rainbow-components';
import classes from './Elections.module.scss';
import { useNavigate } from 'react-router-dom';

const ElectionCard = ({ type, name, id }) => {
  const navigate = useNavigate();

  const handleButonClick = () => {
    navigate('/election', { state: { id: id } });
  };

  const getType = (type) => {
    switch (type) {
      case 'president':
        return 'prElections.png';
      case 'mayor':
        return 'mElections.png';
      case 'farm':
        return 'fElections.png';
      case 'rector':
        return 'eElections.png';
    }
  };

  return (
    <div className={classes.cardWraper}>
      <div className={classes.cardName}>
        <img src={getType(type)} />
        <h6>{name}</h6>
      </div>
      <Button
        label="Learn more"
        variant="border"
        className={classes.cardButton}
        onClick={handleButonClick}
      />
    </div>
  );
};

export default ElectionCard;
