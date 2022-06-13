import React from 'react';
import CandidateCard from './CandidateCard';
import classes from './Candidates.module.scss'


const Candidates = () => {

    const candidates = [
        {   name: 'Katrin Brown', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            url: 'https://i.pinimg.com/564x/1e/ad/de/1eadde963ebe53838cc5f84e3ccf587c.jpg'
        },
        {   name: 'Katrin Brown', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            url: 'https://i.pinimg.com/564x/21/73/24/2173242661a3877ce72a9a4247b59f2c.jpg'
        },
        {   name: 'Katrin Brown', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            url: 'https://i.pinimg.com/564x/f9/fa/67/f9fa673c52a95c64c836d46847b0cdf3.jpg'
        },
        {   name: 'Katrin Brown', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            url: 'https://i.pinimg.com/564x/1e/ad/de/1eadde963ebe53838cc5f84e3ccf587c.jpg'
        },
        {   name: 'Katrin Brown', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            url: 'https://i.pinimg.com/564x/21/73/24/2173242661a3877ce72a9a4247b59f2c.jpg'
        },
        {   name: 'Katrin Brown', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            url: 'https://i.pinimg.com/564x/f9/fa/67/f9fa673c52a95c64c836d46847b0cdf3.jpg'
        },
];

    return (
        <div className={classes.wrapper} >
        <div className={classes.header}>
            <img className={classes.spark} src="spark.png" />
            <h1 className={classes.title}>Choose your{' '}
            <span className={classes.outer}><span className={classes.inner}>fighter</span></span> leader</h1>
            <img className={classes.home} src="home.png" />
           <div className={classes.grid}>
               {
                   candidates.map(({name, description, url}) => 
                   <CandidateCard key={`${name}-${url}`} name={name} description={description} imgUrl={url}/>
                   )
               }
           </div>
        </div>
    </div>
    );
}

export default Candidates;
