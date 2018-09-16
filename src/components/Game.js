import React from 'react';
import Board from './Board';
import Chat from './Chat';
import Well  from 'react-bootstrap/lib/Well';
import Panel  from 'react-bootstrap/lib/Panel';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 3,
            height: 3,
            combo: 3,
            key: Math.random()
        };
}
    restart(width, height, combo) {
        this.setState({
            width: width,
            height: height,
            combo: combo,
            key: Math.random()
        });
    }

    render() {
        return (
            <div id="game">
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        Wow
                    </Panel.Heading>
                    <Panel.Body id="panelBody">
                        <Board key={this.state.key} width={this.state.width} height={this.state.height} combo={this.state.combo} restart={(width, height, combo) => this.restart(width, height, combo)}/>
                        <Chat />
                    </Panel.Body>
                </Panel>
            </div>
        )
    }
}

export default Game;