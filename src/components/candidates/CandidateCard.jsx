import React, { useState, useEffect} from 'react';
import { Button } from 'react-rainbow-components';
import classes from './Candidates.module.scss';
import classNames from 'classnames';


const CandidateCard = ({name, description, imgUrl, electionId, userId, candidateId, isDisabled, isSelected, isFlexible}) => {

    console.log(isFlexible, 'flex')

    const vote = () => {
        fetch(`http://127.0.0.1:8000/api/vote/${userId}`, { 
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({election_id: electionId, candidate_id: candidateId }) 
        });
        window.location.reload();
    }

    const unVote = () => {
        fetch(`http://127.0.0.1:8000/api/unvote/${userId}/election/${electionId}`, { 
            method: 'DELETE', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
        });
        window.location.reload();
    }

    const handleClick = () => {
        if (isSelected && isFlexible) unVote();
        else if (!isSelected) vote();
    }

    const getLabel = () => {
        if (isSelected && isFlexible) return 'Retrieve vote'
        else if (isSelected && !isFlexible) return 'Voted'
        else return 'Vote'
    }

    return (
        <div className={classNames(classes.cardWraper, {
            [classes.selectedCard] : isSelected
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
                    onClick={handleClick}
                    disabled={isDisabled}
                />
            </div>
        </div>
    );
}

export default CandidateCard;
