import React, {Component} from "react";

class Counter extends Component {
    // state = {
    //     value: this.props.counter.value
    // };

    // handleIncrement = ()=> {
    //     this.setState({ value: this.state.value +1 });
    // };

    render() {
        const {counter} = this.props;
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={()=> this.props.onIncrement(counter)}
                    className='btn btn-secondary btn-sm m-2'
                >
                    Increment
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

    getBadgeClasses= ()=> {
        let classes = 'badge m-2 badge-';
        classes += (this.props.counter.value ===0) ? 'warning' : 'primary';
        return classes
    };

    formatCount() {
        const {value} = this.props.counter;
        return value ? value : 'Zero'
    }
}

export default Counter
