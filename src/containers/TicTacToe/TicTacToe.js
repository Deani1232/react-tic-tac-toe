import React, {Component} from 'react';
import GameBoard from "../../components/GameBoard/GameBoard";

import Aux from '../../hocs/Auxiliary/Auxiliary';
import CurrentTurn from "../../components/GameBar/InProgressGameBar/CurrentTurn/CurrentTurn";
import GameBar from "../../components/GameBar/GameBar";

class TicTacToe extends Component {
    state = {
        currentPlayer: "X",
        winner: "",
        squares: [
            {id: 0, value: "", win: false},
            {id: 1, value: "", win: false},
            {id: 2, value: "", win: false},
            {id: 3, value: "", win: false},
            {id: 4, value: "", win: false},
            {id: 5, value: "", win: false},
            {id: 6, value: "", win: false},
            {id: 7, value: "", win: false},
            {id: 8, value: "", win: false}
        ],
        gamesPlayed: 0

    };

    squareClickHandler = (index) => {
        if (this.state.winner !== "") {
            return;
        }
        //alert(index + " Clicked");
        let squareArray = [...this.state.squares];
        let currentPlayer = this.state.currentPlayer;
        let prevPlayer = this.state.currentPlayer;
        if (squareArray[index].value === "") {
            squareArray[index].value = currentPlayer;
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            this.setState({
                squares: squareArray,
                currentPlayer: currentPlayer
            });
        }
        if (this.checkForWin(prevPlayer)) {
            this.setState({
                winner: prevPlayer
            })
        }
    };

    possibleWins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    checkForWin = (player) => {
        let squareArray = [...this.state.squares];
        for (let possibleWin of this.possibleWins) {
            let winner = true;
            for (let squareIndex of possibleWin) {
                if (squareArray[squareIndex].value !== player) {
                    winner = false;
                }
            }
            if (winner) {
                for (let squareIndex of possibleWin) {
                    squareArray[squareIndex].win = true;
                }
                this.setState({
                    squares: squareArray
                });
                return true;
            }
        }
        return false;
    };

    isOneSquareOrMoreFilled() {
        let squareArray = [...this.state.squares];
        for (let element of squareArray) {
            if (element.value !== "") {
                return true;
            }
        }
        return false;
    }

    checkForDraw = () => {
        //TODO: Implement this
    };

    resetGameHandler = () => {
        let squareArray = [...this.state.squares];
        if (this.isOneSquareOrMoreFilled()) {
            let amount = this.state.gamesPlayed;
            this.setState({
                gamesPlayed: amount += 1
            })
        }
        for (let element of squareArray) {
            element.value = "";
            element.win = false;
        }
        this.setState({
            squares: squareArray,
            currentPlayer: "X",
            winner: "",
        });
    };

    render () {
        return (
            <Aux>
                <GameBar currentPlayer={this.state.currentPlayer}
                         resetGame={this.resetGameHandler}
                         winner={this.state.winner}
                         gamesPlayed={this.state.gamesPlayed}/>
                <div style={{height: "40px"}}></div>
                <GameBoard squareClick={this.squareClickHandler} squares={this.state.squares}/>
            </Aux>
        );
    }
}

export default TicTacToe;