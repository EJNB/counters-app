import React, {Component} from "react";

class Counter extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
    }

    render() {
        console.log('Counters - rendered');
        const {counter} = this.props;
        return (
            <div>
                <span className={this.getBadgeClasses(counter)}>{this.formatCount()}</span>
                <button
                    onClick={()=> this.props.onIncrement(counter)}
                    className='btn btn-secondary btn-sm m-2'
                >
                    Increment
                </button>
                <button
                    onClick={()=> this.props.onDecrement(counter)}
                    className='btn btn-secondary btn-sm m-2'
                    disabled={this.checkCounter(counter)}
                >
                    Decrement
                </button>
                <button
                    onClick={() => this.props.onDelete(counter)}
                    className='btn btn-outline-danger btn-sm m-2'
                >
                    Delete
                </button>
            </div>
        )
    }

    checkCounter = counter => {
        return (counter.value === 0) ? true: false;
    };

    getBadgeClasses = counter => {
        let classes = 'badge m-2 badge-';
        classes += (counter.value ===0) ? 'warning' : 'primary';
        return classes
    };

    formatCount() {
        const {value} = this.props.counter;
        return value ? value : 'Zero'
    }
}

export default Counter
