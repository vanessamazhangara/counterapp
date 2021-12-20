import Navbar from './navbar';
import './App.css';
import React, {Component} from 'react';
import Counters from './components/counters';


class App extends Component {
  state = {
    counters: [
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
    ]
}

handleIncrement = counter => {
    const counters = [...this.state.counters]; //clones the counters Array
    const index = counters.indexOf(counter); // we wanna get the index a given counter obj
    counters[index] = {...counter}; //this allows as to clone the index of counter obj, so we don't directly affect counters
    counters[index].value++;
    this.setState({counters})

    console.log(counter)

}

handleDecrement = counter => {
    const counters = [...this.state.counters]; //clones the counters Array
    const index = counters.indexOf(counter); // we wanna get the index a given counter obj
    counters[index] = {...counter}; //this allows as to clone the index of counter obj, so we don't directly affect counters
    counters[index].value--;
    this.setState({counters})

    console.log(counter)

}
handleReset = () => {
    const counters = this.state.counters.map( c => {
        c.value = 0;
        return c
    });

    this.setState({counters})
}

handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId );
    this.setState({counters: counters})
}
  render() { 
    return (
      <React.Fragment>
        <Navbar 
        totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className='contianer'>
          <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    )
  }
}
 
export default App;