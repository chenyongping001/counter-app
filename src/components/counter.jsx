import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.handleIncrement({ count: 1 });
          }}
          className="btn btn-second btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  handleIncrement = (product) => {
    // console.log("Increment Clicked", this);
    this.setState({ count: this.state.count + 1 });
  };
}

export default Counter;
