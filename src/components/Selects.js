import React from 'react';
import ReactDOM from 'react-dom';

const maxSize = 10;

// I need this variables cause GC kills my props and states
let prop;
let name;

class Selects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        prop = this.props;
        name = this.props.name;
    }


    onChange(event) {
        let options = event.target.options;
        let value = [];
        let nameValue;

        for (let i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value = options[i].value;
                nameValue = options[i].className;
            }
        }

        prop.onClick(nameValue, value);
    }

    selects() {
        let selectsArray = [];
        for (let i = 3; i <= maxSize; i++){
            selectsArray.push(<Select number={i} class={this.props.name}/>)
        }
        return selectsArray;
    }

    render (){
        return (
            <div className="classSelect">
                {this.props.name}:
                <select onChange={this.onChange} >
                    <option>{this.props.value}</option>
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
            <option value={this.props.number} class={this.props.class}>{this.props.number}</option>
        )
    }
}

export default Selects;