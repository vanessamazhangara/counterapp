import React, { Component } from "react";

class Counter extends Component {
    // state = {
    //     count: this.props.value,
    //     // tags: ['tag1', 'tag2', 'tag3']
    // }; // state obj is a special react component property that contains the data components need

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this); // now b/c of this constructor we have binded the handleIncrement with the Counter Class, so THIS will refer to obj.
    // }

    // handleIncremen() {
    //     console.log('This Increment', this); // right now THIS will console log undefined because of the stand alone handle fxn
    // }

     // OR another way to bind event handlers is by using the ARROW function (they inherit obj methods)
    // handleIncrement = () => {
    //     this.setState({ count: this.state.count +1 }) // setState() is what we can use to update DOM with VIRTUAL DOM
    // }
    

  render() {
    // React.createElement('div'); BABEL compiling
    console.log('props', this.props);
    return (
      <div className="row">
          <div className="col-1">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span> 
          </div>
          <div className="col">
            <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">+</button>
            <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-2" disabled={this.props.counter.value === 0 ? 'disabled': ""}>-</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">Delete</button>
          </div>
       
        {/* <ul>
            {this.state.tags.map(tag => <li key={tag}> {tag} </li>) }
        </ul> */}
      </div>
    );
  }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    } // this is how we can RENDER classes

  formatCount() {
      const { value }  = this.props.counter // this.state refers to the state Obj, we destructure the count property
      return value === 0 ? 'Zero': value;
  }
}

export default Counter;
