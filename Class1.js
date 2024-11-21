import React from "react";

class Class1 extends React.Component {
  constructor() {
    super();
    console.log(this);
  }
  f1() {
    this.props.age = 24;
  }
  render() {
    return (
      <div className="contaner">
        <h1>Props example</h1>
        <p>Name:{this.props.name}</p>
        <p>Age:{this.props.age}</p>
        <button
          onClick={() => {
            this.f1();
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

export default Class1;
