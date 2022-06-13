import React, { useEffect } from 'react';
import ElectionCard from './ElectionCard';
import classes from './Elections.module.scss';


const Elections = () => {

    const electionTypes = ['president', 'mayor', 'farm', 'rector'];
    const elections = [
    { name: 'Presidential Elections' }, 
    { name: 'Mayoral Elections' }, 
    { name: 'Collective Farm elections' }, 
    { name: 'Rector Elections' },
    { name: 'Collective Farm elections' }, 
    { name: 'Rector Elections' },
    { name: 'Collective Farm elections' }, 
    { name: 'Rector Elections' },];

    const mockedData = {
        election_id: 3,
        candidate_id: 7
      };

    // useEffect(()=> {
    //     fetch('http://127.0.0.1:8000/api/vote/6', { 
    //     method: 'POST', 
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //         "Access-Control-Allow-Origin": "*",
    //     },
    //     body: JSON.stringify(mockedData) 
    // })
    // }, [])

    return (
        <div className={classes.wrapper} >
        <div className={classes.header}>
            <img className={classes.spark} src="spark.png" />
            <h1 className={classes.title}>Let's get to know your choice</h1>
            <img className={classes.home} src="home.png" />
           <div className={classes.grid}>
               {
                   elections.map(({name}, index) => 
                   <ElectionCard name={name} type={electionTypes[`${index > 3 ? index % 4 : index}`]}/>)
               }
           </div>
        </div>
    </div>
    );
}

export default Elections;
