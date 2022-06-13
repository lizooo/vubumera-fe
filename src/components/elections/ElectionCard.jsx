import React from 'react';
import { Button } from 'react-rainbow-components';
import classes from './Elections.module.scss';


const ElectionCard = ({type, name}) => {

    const getType = (type) => {
        switch (type) {
            case 'president' : return 'prElections.png'
            case 'mayor' : return 'mElections.png'
            case 'farm': return 'fElections.png'
            case 'rector': return 'eElections.png'
        }
    }

    return (
         <div className={classes.cardWraper} >
             <div className={classes.cardName}>
                <img src={getType(type)}/>
                <h6>{name}</h6>
             </div>
             <Button 
             label="Learn more"
             variant='border'
             className={classes.cardButton}
             />
        </div>
    );
}

export default ElectionCard;
