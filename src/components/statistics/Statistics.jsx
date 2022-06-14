import React, { useState, useEffect, useContext } from 'react';
import classes from './Statistics.module.scss';
import { Chart, Dataset } from 'react-rainbow-components';
import AuthContext from '../../context/AuthProvider';

const Statistics = () => {
  const [statistics, setStatistics] = useState();
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (auth) {
      fetch(`http://127.0.0.1:8000/api/statistics/${auth}`, {
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
          setStatistics(responseJson);
        })
        .catch((error) => {
          console.log(error);
          return Promise.reject();
        });
    }
  }, [auth]);

  const containerStyles = {
    maxWidth: 600,
    color: 'rgba(69, 77, 104, 0.8)',
  };
  const electionTypes = ['president', 'mayor', 'farm', 'rector'];

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
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <img className={classes.spark} src="spark.png" />
        <h1 className={classes.title}>See more details</h1>
        <img className={classes.home} src="home.png" />
        {statistics && (
          <div className={classes.grid}>
            {statistics.map(({ statistic, name, id }, index) => (
              <div
                key={id}
                style={containerStyles}
                className={classes.chartWrapper}
              >
                <div className={classes.chartName}>
                  <img
                    src={getType(
                      electionTypes[`${index > 3 ? index % 4 : index}`]
                    )}
                  />
                  <h6>{name}</h6>
                </div>
                <Chart labels={statistic[0]} type="horizontalBar">
                  <Dataset
                    key="Sales"
                    title="Votes in %"
                    values={statistic[1]}
                    backgroundColor="#0047EE"
                  />
                </Chart>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Statistics;
