import React from 'react';

import classes from './GameBoard.module.css';
import GameSquare from "../GameSquare/GameSquare";

const GameBoard = (props) => {

    let gameSquares = [];
    let squaresPassed = [...props.squares];

    for (let i = 0; i < squaresPassed; i++) {
        gameSquares.push(
            <GameSquare
                value={squaresPassed[i].value}
                win={squaresPassed[i].win}
                squareClicked={
                    () => props.squareClick(i)
                }
            />
        )
    }

    return (
        <div className={classes.GameBoard}>
            {
                props.squares.map( (square) => {
                    return (
                        <GameSquare
                            key={square.id + " square"}
                            value={square.value}
                            win={square.win}
                            squareClicked={() => props.squareClick(square.id)}
                        />
                    )
                })
            }
        </div>
    );
};

export default GameBoard;