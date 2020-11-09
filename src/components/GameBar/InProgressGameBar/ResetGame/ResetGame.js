import React from 'react';

import classes from './ResetGame.module.css';
import Button from "../../../UI/Button/Button";

const ResetGame = (props) => {
    return (
        <div className={classes.ResetGame}>
            <Button buttonType={"Success"} onClick={props.resetGame}>Reset Game</Button>
        </div>
    );
};

export default ResetGame;