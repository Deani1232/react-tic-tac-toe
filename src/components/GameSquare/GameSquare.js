import React from 'react';

import classes from './GameSquare.module.css';

const GameSquare = (props) => {

    let squareClasses = [];

    if (props.win === true) {
        squareClasses.push(classes.GameSquare);
        squareClasses.push(classes.Win);
    } else {
        squareClasses.push(classes.GameSquare);
    }

    return (
        <div className={squareClasses.join(" ")} onClick={props.squareClicked}>
            <div className={classes.Content}>
                <div className={classes.Table}>
                    <div className={classes.TableCell}>
                        <p>{props.value}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameSquare;