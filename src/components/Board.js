import React from 'react';

import Selects from './Selects';

import Panel  from 'react-bootstrap/lib/Panel';
import Button  from 'react-bootstrap/lib/Button';

import crossX from '../img/X.png';
import circleO from '../img/O.png';
import nothing_ from '../img/_.png';

let player = 1;
let info = "Welcome";
let boardArray = [];

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            width: this.props.width,
            height: this.props.height,
            combo: this.props.combo,
            info: info
        };

        for(let i = 0; i < this.state.height; i++){
            let boardRow = [];

            for(let j = 0; j < this.state.width; j++){
                boardRow[j] = 0;
            }

            boardArray[i] = boardRow;
        }
    }

    isItWin(elementID) {
        const [ i, j ] = elementID.slice();
        boardArray[i][j] = player;
        let needCombo = this.state.combo;

        for (let n = -1; n < 2; n++) {
            for (let m = -1; m < 2; m++) {
                let i_n = +i + n;
                let j_m = +j + m;
                let combo = 0;

                if ((n == 0 && m == 0)){
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
                    while (needContinue);

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
            this.setState({info: `Player ${player} win!` });
        }
        else {

            if (player == 1) {
                this.setState({info: "Player 2"})
            }
            else {
                this.setState({info: "Player 1"})
            }
        }
    }

    drawSquares() {
        const {width, height} = this.state;
        let result = [];

        let someVar = [];

        for (let i = 0; i < height; i++) {
            result.push(<br key={"br" + i}/>);
            for (let j = 0; j < width; j++) {
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


    updateValue(nameValue, value) {
        this.props.updateValue(nameValue, value);
    }

    render() {
        return (
            <Panel bsStyle="primary" id="board">
                <Panel.Heading>
                    <Panel.Title componentClass="h3">{this.state.info}</Panel.Title> <br/>
                    <div>
                        <Selects name="Width" value={this.state.width} onClick={(nameValue, value) => this.updateValue(nameValue, value)}/>
                        <Selects name="Height" value={this.state.height} onClick={(nameValue, value) => this.updateValue(nameValue, value)}/>
                        <Selects name="Combo" value={this.state.combo} onClick={(nameValue, value) => this.updateValue(nameValue, value)}/>
                    </div>
                    <br/>
                    <Button bsStyle="success" id="restart" onClick={() => this.props.restart()}>Restart</Button>
                </Panel.Heading>
                <Panel.Body id="field">
                    <div id="ticBoard">
                        {this.drawSquares()}
                    </div>
                </Panel.Body>
            </Panel>
        )
    }
}

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : nothing_,
            onClick: () => this.chooseThisSquare()
        };
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
            <button id={this.props.index} className="square" onClick={this.state.onClick}>
                <img src={this.state.value} />
            </button>
        )
    }
}

export default Board;