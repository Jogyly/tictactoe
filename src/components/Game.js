import React from 'react';
import Board from './Board';
import Chat from './Chat';

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

export default Game;