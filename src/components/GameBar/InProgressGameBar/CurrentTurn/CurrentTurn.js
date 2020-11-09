import React from 'react';

import classes from './CurrentTurn.module.css';

const CurrentTurn = (props) => {
    return (
        <div className={classes.CurrentTurn}>
            <p className={classes.Label}>Current Turn:</p>
            <p className={classes.Value}>{props.currentPlayer}</p>
        </div>
    );
};

export default CurrentTurn;