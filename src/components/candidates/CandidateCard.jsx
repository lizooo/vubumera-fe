import React, { useState, useEffect} from 'react';
import { Button } from 'react-rainbow-components';
import classes from './Candidates.module.scss';
import classNames from 'classnames';


const CandidateCard = ({name, description, imgUrl, electionId, userId, candidateId, isDisabled}) => {

    const vote = () => {
        fetch(`http://127.0.0.1:8000/api/vote/${userId}`, { 
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({election_id: electionId, candidate_id: candidateId }) 
        })
    }

    const getLabel = () => {
        if (!isDisabled) return 'Retrieve vote'
        else return 'Vote'
    }

    return (
        <div className={classNames(classes.cardWraper, {
            [classes.selectedCard] : !isDisabled
        })} >
            <div className={classes.imgWrapper}>
                <img src={imgUrl}/>
            </div>
            <div className={classes.cardBody}>
                <div className={classes.cardName}>
                    <h5>{name}</h5>
                    <h6>{description}</h6>
                </div>
                <Button 
                    label={getLabel()}
                    variant='border'
                    className={classes.cardButton}
                    onClick={vote}
                    disabled={isDisabled}
                />
            </div>
        </div>
    );
}

export default CandidateCard;
