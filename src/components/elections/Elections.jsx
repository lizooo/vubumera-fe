import React, { useEffect, useState } from 'react';
import ElectionCard from './ElectionCard';
import classes from './Elections.module.scss';


const Elections = () => {

    const [electionsData, setElectionsData] = useState();

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
    const isLoggedIn = !!getCookie('passportId');

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

        useEffect(()=> {
        fetch('http://127.0.0.1:8000/api/elections/6', { 
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
            setElectionsData(responseJson)
        })
        .catch((error) => {
            console.log(error);
            return Promise.reject();
        }) 
    }, [])

    return (<>
        { isLoggedIn ? <div className={classes.wrapper} >
        <div className={classes.header}>
            <img className={classes.spark} src="spark.png" />
            <h1 className={classes.title}>Let's get to know your choice</h1>
            <img className={classes.home} src="home.png" />
           <div className={classes.grid}>
               {
                   electionsData.map(({name}, index) => 
                   <ElectionCard name={name} type={electionTypes[`${index > 3 ? index % 4 : index}`]}/>)
               }
           </div>
        </div>
    </div> : 
    <div>Please register</div>}
    </>
    );
}

export default Elections;
