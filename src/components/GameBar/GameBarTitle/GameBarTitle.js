import React from 'react';

const GameBarTitle = (props) => {
    return (
        <div>
            <h1>Tic-Tac-Toe</h1>
            <p>Games Played: {props.gamesPlayed}</p>
        </div>
    );
};

export default GameBarTitle;