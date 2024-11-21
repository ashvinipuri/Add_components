import React, { Component } from "react";

export default class Class4 extends Component {
  constructor() {
    super();
    this.state = {
      apidata: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:9000/users")
      .then((res) => res.json())
      .then((value) => {
        console.log(value);
        this.setState({
          apiData: value,
        });
      });
  }
  render() {
    var result = this.state.apiData;
    return (
      <div className="container">
        <h1>Fetch Data from NodeJS</h1>
        <table className="table">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Place</th>
          </tr>
                {result && result.length > 0 && result.map((value) => (
                    <tr>
              <td>{ value.name}</td>
              <td>{ value.age}</td>
              <td>{ value.place}</td>
          </tr>))}
        </table>
      </div>
    );
  }
}
