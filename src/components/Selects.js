import React from 'react';
import ReactDOM from 'react-dom';

const maxSize = 10;

// I need this variable cause GC kills my props and states
let prop;

class Selects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }

        prop = this.props;
    }


    onChange(event) {
        var options = event.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value = options[i].value;
            }
        }

        prop.onClick(value);
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
                <select default='3' onChange={this.onChange} >
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