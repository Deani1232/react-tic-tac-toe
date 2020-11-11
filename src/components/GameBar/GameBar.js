import React from 'react';
import InProgressGameBar from "./InProgressGameBar/InProgressGameBar";
import WinnerGameBar from "./WinnerGameBar/WinnerGameBar";

const GameBar = (props) => {
    return (
        <div>
            {
                props.winner !== "" ?
                <WinnerGameBar winner={props.winner} resetGame={props.resetGame} gamesPlayed={props.gamesPlayed}/> :
                <InProgressGameBar currentPlayer={props.currentPlayer} resetGame={props.resetGame} gamesPlayed={props.gamesPlayed}/>
            }
        </div>
    );
};

export default GameBar;