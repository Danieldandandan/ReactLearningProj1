import React, { Component } from "react";

class Counter extends Component {
    componentDidUpdate(prevProps, prevStates) {
        console.log(prevProps);
        console.log(prevStates);
    }
    componentWillUnmount() {
        console.log("componet will unmount");
    }
    render() {
        console.log("counter rendered", this.props.counter.id);
        return (
            <div>
                <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
                <button
                    onClick={() => this.props.onIncrment(this.props.counter)}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        );
    }
    getBadgeClasses() {
        let format = "badge m-2 badge-";
        format += this.props.counter.value === 0 ? "warning" : "primary";
        return format;
    }
    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;
