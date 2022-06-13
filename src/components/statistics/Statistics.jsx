import React from 'react';
import classes from "./Statistics.module.scss"
import { Chart, Dataset } from 'react-rainbow-components';

const Statistics = () => {

    const results = [
        {   candidates: ['January', 'February', 'March', 'April', 'May'], 
            votes: [18, 42, 58, 50, 19],
            name: 'Fucking elections'
        },
        {   candidates: ['January', 'February', 'March', 'April', 'May'], 
            votes: [18, 42, 58, 50, 19],
            name: 'The chart is so ugly..'
        },
        {   candidates: ['January', 'February', 'March', 'April', 'May'], 
            votes: [18, 42, 58, 50, 19],
            name: 'I hate this '
        },
        {   candidates: ['January', 'February', 'March', 'April', 'May'], 
            votes: [18, 42, 58, 50, 19],
            name: 'If this doesnt det the appreciation it deserves im going to commit a crime today'
        },
    ];


    const containerStyles = {
        maxWidth: 600,
        color: 'rgba(69, 77, 104, 0.8)',
    };
    const electionTypes = ['president', 'mayor', 'farm', 'rector'];
    const getType = (type) => {
        switch (type) {
            case 'president' : return 'prElections.png'
            case 'mayor' : return 'mElections.png'
            case 'farm': return 'fElections.png'
            case 'rector': return 'eElections.png'
        }
    }

    return (
        <div className={classes.wrapper} >
        <div className={classes.header}>
            <img className={classes.spark} src="spark.png" />
            <h1 className={classes.title}>See more details</h1>
            <img className={classes.home} src="home.png" />
           <div className={classes.grid}>
               {results.map(({candidates, votes, name}, index) => 
               <div
               style={containerStyles}
               className={classes.chartWrapper}
                >
                    <div className={classes.chartName}>
                    <img src={getType(electionTypes[`${index > 3 ? index % 4 : index}`])}/>
                    <h6>{name}</h6>
                    </div>
                    <Chart labels={candidates} type="horizontalBar">
                        <Dataset key="Sales" title='Votes' values={votes} backgroundColor="#0047EE" />
                    </Chart>
                </div>
               )}
           </div>
           
        </div>
    </div>
    );
}

export default Statistics;
