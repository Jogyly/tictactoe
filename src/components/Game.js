import React from 'react';

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