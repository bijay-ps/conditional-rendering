import React, {useState} from 'react';
import "./counter.styles.css";

class CounterComponent extends React.Component{

    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }
    incrementHandler() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrementHandler(){
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render () {
        return (
            <div className="counter-container">
                Great!! You are logged in now. Let's use our counter application
                <div className="counter-action-container">
                    <span className="btn" style={{ paddingLeft: '15px' }} onClick={this.incrementHandler.bind(this)}>➕</span>
                    <span>{this.state.counter}</span>
                    <span className="btn" onClick={this.decrementHandler.bind(this)}>➖</span>
                </div>
            </div>
        );
    }
};

export default CounterComponent;