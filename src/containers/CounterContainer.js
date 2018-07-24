import React, { Component } from 'react';
import Counter from '../views/Counter/index.js';

class CounterApp extends Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
        //this.increaseCounter = this.increaseCounter.bind(this);
        //this.resetCounter = this.resetCounter.bind(this);
        //this.decreaseCounter = this.decreaseCounter.bind(this);
    }

    increaseCounter = () => {
        this.setState({counter: this.state.counter + 1})
    }

    resetCounter = () => {
        this.setState({counter: 0});
    }

    decreaseCounter = () => {
        if (this.state.counter > 0) this.setState({counter: this.state.counter - 1});
    }

    render () {
        return (
            <Counter
                counterNum = {this.state.counter}
                increaseCounter = {this.increaseCounter}
                resetCounter = {this.resetCounter}
                decreaseCounter = {this.decreaseCounter}
            />
        )
    }
}

export default CounterApp;