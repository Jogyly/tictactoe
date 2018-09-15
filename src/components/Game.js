import React from 'react';
import Board from './Board';
import Chat from './Chat';
import Well  from 'react-bootstrap/lib/Well';
import Panel  from 'react-bootstrap/lib/Panel';

class Game extends React.Component {
    render() {
        return (
            <div id="game">
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        Wow
                    </Panel.Heading>
                    <Panel.Body id="panelBody">
                        <Board />
                        <Chat />
                    </Panel.Body>
                </Panel>
            </div>
        )
    }
}

export default Game;