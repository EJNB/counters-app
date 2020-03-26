import React, {Component} from 'react';
import './App.css';
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]
    };

    constructor(props) {
        super(props);
        console.log('App - Constructor', this.props);
        // this.state = props.something;
    }

    componentDidMount() {
        console.log('App was mount');
    }

    handleDelete = counter => {
        const counters = this.state.counters.filter(c => c !== counter);
        this.setState({counters})
    };

    handleIncrement = counter => {
        let counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter };
        counters[index].value++;
        this.setState({counters});
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});
    };

    handleIncrement = counter => {
       if (counter.value > 0) {
           let counters = [...this.state.counters];
           const index = counters.indexOf(counter);
           counters[index] = {...counter};
           counters[index].value--;
           this.setState({counters});
       }
    };

    render() {
        console.log('App - rendered');
        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c=> c.value > 0).length}/>
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleIncrement}
                    />
                </main>
            </React.Fragment>
        );
    }

}

export default App;
