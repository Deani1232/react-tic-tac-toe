import React from 'react';
import ComponentBar from "../../UI/ComponentBar/ComponentBar";
import CurrentTurn from "../InProgressGameBar/CurrentTurn/CurrentTurn";
import ComponentBarItem from "../../UI/ComponentBar/ComponentBarItem/ComponentBarItem";
import PlayerWinMessage from "./PlayerWinMessage/PlayerWinMessage";
import Button from "../../UI/Button/Button";
import GameBarTitle from "../GameBarTitle/GameBarTitle";

const WinnerGameBar = (props) => {
    return (
        <ComponentBar height={"130px"} alignVertically={true}>
            <ComponentBarItem color={"#74ff99"} width={30}>
                <GameBarTitle gamesPlayed={props.gamesPlayed}/>
            </ComponentBarItem>
            <ComponentBarItem color={"#74ff99"} width={40}>
                <PlayerWinMessage winner={props.winner}/>
            </ComponentBarItem>
            <ComponentBarItem color={"#74ff99"} width={30}>
                <Button onClick={props.resetGame}>New Game</Button>
            </ComponentBarItem>
        </ComponentBar>
    );
};

export default WinnerGameBar;