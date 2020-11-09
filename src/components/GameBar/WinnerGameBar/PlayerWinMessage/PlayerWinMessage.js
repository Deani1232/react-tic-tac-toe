import React from 'react';

import classes from './PlayerWinMessage.module.css';

const PlayerWinMessage = (props) => {
    return (
        <div className={classes.WinnerMessageBlock}>
            <p>WINNER: {props.winner}</p>
        </div>
    );
};

export default PlayerWinMessage;