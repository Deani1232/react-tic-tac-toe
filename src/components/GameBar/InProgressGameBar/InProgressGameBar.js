import React from 'react';
import CurrentTurn from "./CurrentTurn/CurrentTurn";
import ComponentBarItem from "../../UI/ComponentBar/ComponentBarItem/ComponentBarItem";
import EvenlySpacedComponentBar from "../../UI/ComponentBar/EvenlySpacedComponentBar/EvenlySpacedComponentBar";
import ComponentBar from "../../UI/ComponentBar/ComponentBar";
import ResetGame from "./ResetGame/ResetGame";
import Button from "../../UI/Button/Button";
import GameBarTitle from "../GameBarTitle/GameBarTitle";

const InProgressGameBar = (props) => {
    return (
        <ComponentBar height={"130px"} alignVertically={true}>
            <ComponentBarItem color={"#ffa83e"} width={100/3}>
                <GameBarTitle gamesPlayed={props.gamesPlayed}/>
            </ComponentBarItem>
            <ComponentBarItem color={"#ffa83e"} width={100/3}>
                <ComponentBar>
                    <ResetGame resetGame={props.resetGame}/>
                </ComponentBar>
            </ComponentBarItem>
            <ComponentBarItem color={"#ffa83e"} width={100/3}>
                <CurrentTurn currentPlayer={props.currentPlayer}/>
            </ComponentBarItem>
        </ComponentBar>
    );
};

export default InProgressGameBar;