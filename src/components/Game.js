import React from 'react';
import Board from './Board';
import Chat from './Chat';
import Well  from 'react-bootstrap/lib/Well';
import Panel  from 'react-bootstrap/lib/Panel';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 4,
            height: 3,
            combo: 3,
            key: Math.random()
        };
}
    restart() {
        this.setState({
            key: Math.random()
        });
    }

    updateValue(nameValue, value) {
        if (nameValue == 'Width') {
            this.setState({
                width: value,
                key: Math.random()
            })
        }
        else if (nameValue == 'Height') {
            this.setState({
                height: value,
                key: Math.random()
            })
        }
        else
            this.setState({
                combo: value,
                key: Math.random()
            })
    }

    render() {
        return (
            <div id="game">
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        Wow
                    </Panel.Heading>
                    <Panel.Body id="panelBody">
                        <Board key={this.state.key} width={this.state.width} height={this.state.height} combo={this.state.combo} restart={() => this.restart() } updateValue={(nameValue, value) => this.updateValue(nameValue, value)}/>
                        <Chat />
                    </Panel.Body>
                </Panel>
            </div>
        )
    }
}

export default Game;