import React from 'react';
import Panel  from 'react-bootstrap/lib/Panel';
import Button  from 'react-bootstrap/lib/Button';

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

export default Chat;