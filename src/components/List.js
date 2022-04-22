import React, { Component } from "react";
import planetsJSON from "../assets/data.json";
import Card from "../UI/Card";

class List extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    };
  }

  componentDidMount() {
    if (planetsJSON) {
      this.setState({
        data: planetsJSON,
        loading: false,
      });
    }
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        {data.map((planet) => (
        //  <div key={planet.position}>
            <Card key={planet.position} planet={planet} />
        //  </div>
        ))}
      </div>
    );
  }
}

export default List;
