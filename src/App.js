import React from 'react';
//import './style/index.css';

import Panel  from 'react-bootstrap/lib/Panel';
import Button  from 'react-bootstrap/lib/Button';

import crossX from './img/X.png';
import circleO from './img/O.png';
import nothing_ from './img/_.png';


let player = 1;
let info = "Welcome";
let boardArray = [];

class Game extends React.Component {
    render() {
        return (
            <div id="game">
                <Board />
                <Chat />
            </div>
        )
    }
}

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 5,
            height: 5,
            strike: 3,
            needCombo: 4,
            info: "welcome"
        }

        for(let i = 0; i < 6; i++){
            let boardRow = [];

            for(let j = 0; j < 6; j++){
                boardRow[j] = 0;
            }

            boardArray[i] = boardRow;
        }
    }

    isItWin(elementID) {
        const [ i, j ] = elementID.slice();
        boardArray[i][j] = player;
        let needCombo = this.state.needCombo;

        for (let n = -1; n < 2; n++) {
            for (let m = -1; m < 2; m++) {
                let i_n = +i + n;
                let j_m = +j + m;
                let combo = 0;

                if ((n == 0 && m == 0)){// || (i_n < 0 || j_m < 0)){
                    continue;
                }

                if ( !!boardArray[i_n] && !!boardArray[i_n][j_m] && (boardArray[i_n][j_m] == player)){

                    combo = 2;

                    let counter = 2;
                    let plusOrMinus = 1;
                    let needContinue;

                    do {
                        needContinue = false;
                        i_n = +i + n*counter*plusOrMinus;
                        j_m = +j + m*counter*plusOrMinus;

                        if (!!boardArray[i_n] && !!boardArray[i_n][j_m] && (boardArray[i_n][j_m] == player)) {
                            needContinue = true;
                            combo++;
                            counter++;
                        }

                        if (!needContinue && plusOrMinus == 1) {
                            plusOrMinus = -1;
                            needContinue = true;
                            counter = 1;
                        }
                    }
                    while (needContinue)

                    if (combo >= needCombo) {
                        return true;
                    }
                }
            }
        }

        return false;

    }

    choose(elementID) {

        if (this.isItWin(elementID)){
            this.setState({info: `Player ${player} win!` })
        }
        else {

            if (player == 1) {
                this.setState({info: "Player 1"})
            }
            else {
                this.setState({info: "Player 2"})
            }
        }
    }

    drawSquares() {
        const {width, height} = this.state;
        let result = [];

        let someVar = [];

        for (let i = 0; i < width; i++) {
            result.push(<br key={"br" + i}/>);
            for (let j = 0; j < height; j++) {
                let index = i + "" + j;
                result.push(
                    <Square
                        index={index}
                        key={index}
                        choose={(elementID) => this.choose(elementID)}
                    />
                );
            }
        }

        return result;
    }


    render() {
        return (
            <div id="board">
                <div id="info">{this.state.info}</div>
                <div id="field">
                    <div id="board">
                        {this.drawSquares()}
                    </div>
                </div>

            </div>
        )
    }
}

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : nothing_,
            onClick: () => this.chooseThisSquare()
        }
    }

    chooseThisSquare(){
        this.setState({onClick: ""});

        this.props.choose(this.props.index);

        if (player == 1) {
            this.setState({value: crossX});
            player = 2;
        }
        else {
            this.setState({value: circleO});
            player = 1;
        }
    }

    render() {
        return (
            <div id={this.props.index} className="square" onClick={this.state.onClick}>
                <img src={this.state.value} />
            </div>
        )
    }
}

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Panel id="chat" bsStyle="primary">
                <Panel.Heading>
                    Chat
                </Panel.Heading>
                <Panel.Body>
                    <label>Shad: </label> Wow <br/>
                    <label>Wolf: </label> OMG!<br/>
                    Game starts
                </Panel.Body>
            </Panel>
        )
    }
}

export default Game;