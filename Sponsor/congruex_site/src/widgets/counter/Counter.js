import React from 'react'

const LOCAL_COUNTER_ID = "react-counter";

export default class Counter extends React.Component {
    // console.log()
    constructor(props) {
        super(props);
        this.getAddOne = this.getAddOne.bind(this);
        this.getMinusOne = this.getMinusOne.bind(this);
        this.getReset = this.getReset.bind(this);
        this.state = {
            // use the default react counter id if one is not provided,
            // each widget need to pass id to be remembered individually
            counter_id: this.props.counter_id ?? LOCAL_COUNTER_ID,
            count: 0
        };
    }
    
    componentDidMount() {
        const count = parseInt(localStorage.getItem(this.state.counter_id), 10);
        if (!isNaN(count)) {
            this.setState(() => ({ count }));
        }
    }
    componentDidUpdate(lastProp, lastState) {
        if(lastState.count !== this.state.count) {
            localStorage.setItem(this.state.counter_id, this.state.count);
        }
    }

    getAddOne() {
        this.setState(lastState => {
            return { count: lastState.count + 1 };
        });
    }
    getMinusOne() {
        this.setState(lastState => {
            return { count: lastState.count - 1 };
        });
    }
    getReset() {
        this.setState(() => {
            return { count: 0 };
        });
    }

    render() {
        return (
            <div>
                <h1 className='gradient__text'>Clicks: {this.state.count}</h1>
                <button onClick={this.getAddOne}>Plus</button>
                <button onClick={this.getMinusOne}>Minus</button>
                <button onClick={this.getReset}>Reset</button>
            </div>
        )
    }
}