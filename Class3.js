import React from "react";
class Class3 extends React.Component {
  constructor() {
    super();
    console.log(this);
    this.state = { name: "Aditya", age: 22 };
  }
  f1() {
    this.setState({ name: "Aditi" });
  }
  componentDidMount() {
    console.log("Did mount cycle call: ", this.state.name, this.state.age);
  }

  //didUpdate() cycle called whenever there change in state
  componentDidUpdate() {
    console.log("Did update cycle call: ", this.state.name, this.state.age);
  }

  componentWillUnmount() {
    console.log("Leaving component");
  }
  f2() {
    this.setState({ age: this.state.age + 5 });
  }
  render() {
    return (
      <div className="container">
        <h1>life-cycle hook</h1>
        <p>{this.state.name}</p>
        <button
          onClick={() => {
            this.f1();
          }} //click on btn call f1 method
        >
          Change name
        </button>
        <p>{this.state.age}</p>
        <button
          onClick={() => {
            this.f2();
          }}
        >
          Change age
        </button>
      </div>
    );
  }
}

export default Class3;
