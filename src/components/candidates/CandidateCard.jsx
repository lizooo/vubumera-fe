import React from 'react';
import { Button } from 'react-rainbow-components';
import classes from './Candidates.module.scss'


const CandidateCard = ({name, description, imgUrl}) => {
    return (
        <div className={classes.cardWraper} >
            <div className={classes.imgWrapper}>
                <img src={imgUrl}/>
            </div>
            <div className={classes.cardBody}>
                <div className={classes.cardName}>
                    <h5>{name}</h5>
                    <h6>{description}</h6>
                </div>
                <Button 
                    label="Vote"
                    variant='border'
                    className={classes.cardButton}
                />
            </div>
        </div>
    );
}

export default CandidateCard;
