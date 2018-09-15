import React from 'react';
import ReactDOM from 'react-dom';

const maxSize = 10;

class Selects extends React.Component {
    constructor(props) {
        super(props);
    }

    selects() {
        let selectsArray = [];
        for (let i = 3; i <= maxSize; i++){
            selectsArray.push(<Select number={i}/>)
        }
        return selectsArray;
    }

    render (){
        return (
            <div className="classSelect">
                {this.props.name}:
                <select default='3'>
                    {this.selects()}
                </select>
            </div>
        );
    }
}

class Select extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <option value={this.props.number}>{this.props.number}</option>
        )
    }
}

export default Selects;