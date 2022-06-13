import React, { useEffect, useState, useContext } from 'react';
import PermissionDenied from '../permissionDenied/PermissionDenied';
import ElectionCard from './ElectionCard';
import classes from './Elections.module.scss';
import AuthContext from '../../context/AuthProvider';

const Elections = () => {
  const [electionsData, setElectionsData] = useState();
  const { auth } = useContext(AuthContext);

  const isLoggedIn = !!auth;

  const electionTypes = ['president', 'mayor', 'farm', 'rector'];

  useEffect(() => {
    {
      if (auth)
        fetch(`http://127.0.0.1:8000/api/elections/user/${auth}`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        })
          .then((response) => {
            if (!response.ok) {
              return response.text().then((text) => {
                throw new Error(text);
              });
            }
            return response.json();
          })
          .then((responseJson) => {
            setElectionsData(responseJson);
          })
          .catch((error) => {
            console.log(error);
            return Promise.reject();
          });
    }
  }, [auth]);

  return (
    <>
      {isLoggedIn ? (
        <div className={classes.wrapper}>
          <div className={classes.header}>
            <img className={classes.spark} src="spark.png" />
            <h1 className={classes.title}>Let's get to know your choice</h1>
            <img className={classes.home} src="home.png" />
            {electionsData && (
              <div className={classes.grid}>
                {electionsData.map((election, index) => (
                  <ElectionCard
                    key={election.id}
                    name={election.name}
                    id={election.id}
                    type={electionTypes[`${index > 3 ? index % 4 : index}`]}
                    isLocal={election?.location}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <PermissionDenied />
      )}
    </>
  );
};

export default Elections;
