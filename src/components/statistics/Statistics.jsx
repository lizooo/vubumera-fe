import React, { useState, useEffect } from 'react';
import classes from "./Statistics.module.scss"
import { Chart, Dataset } from 'react-rainbow-components';

const Statistics = () => {

    const [statistics, setStatistics] = useState();

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
    const userId = getCookie('passportId');

    useEffect(()=> {
        fetch(`http://127.0.0.1:8000/api/statistics/${userId}`, { 
        method: 'GET', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
        }})
        .then((response) => {
            if (!response.ok) {
                return response.text().then(text => { throw new Error(text) })
            }
            return response.json();
        })
        .then((responseJson) => { 
            setStatistics(responseJson);
        })
        .catch((error) => {
            console.log(error);
            return Promise.reject();
        }) 
    }, [])

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
            { statistics && <div className={classes.grid}>
               {statistics.map(({statistic, name}, index) => 
               <div
               style={containerStyles}
               className={classes.chartWrapper}
                >
                    <div className={classes.chartName}>
                    <img src={getType(electionTypes[`${index > 3 ? index % 4 : index}`])}/>
                    <h6>{name}</h6>
                    </div>
                    <Chart labels={statistic[0]} type="horizontalBar">
                        <Dataset key="Sales" title='Votes in %' values={statistic[1]} backgroundColor="#0047EE" />
                    </Chart>
                </div>
               )}
           </div>
           }
        </div>
    </div>
    );
}

export default Statistics;
