import React from 'react';
import ComponentBar from "../../UI/ComponentBar/ComponentBar";
import CurrentTurn from "../InProgressGameBar/CurrentTurn/CurrentTurn";
import ComponentBarItem from "../../UI/ComponentBar/ComponentBarItem/ComponentBarItem";
import PlayerWinMessage from "./PlayerWinMessage/PlayerWinMessage";
import Button from "../../UI/Button/Button";

const WinnerGameBar = (props) => {
    return (
        <ComponentBar height={"130px"} alignVertically={true}>
            <ComponentBarItem color={"#74ff99"} width={20}>
            </ComponentBarItem>
            <ComponentBarItem color={"#74ff99"} width={60}>
                <PlayerWinMessage winner={props.winner}/>
            </ComponentBarItem>
            <ComponentBarItem color={"#74ff99"} width={20}>
                <Button onClick={props.resetGame}>New Game</Button>
            </ComponentBarItem>
        </ComponentBar>
    );
};

export default WinnerGameBar;