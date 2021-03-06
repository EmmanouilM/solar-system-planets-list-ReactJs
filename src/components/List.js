import React, { Component } from "react";
import planetsJSON from "../assets/data.json";
import Planet from "./Planet";
import "../styles/_list.scss";

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
    const planetsList = data.map((planet) => (
      <Planet
        key={planet.position}
        name={planet.name}
        image={planet.image}
        velocity={planet.velocity}
        description={planet.description}
        distance={planet.distance}
      />
    ));

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className='container'>
        <h1>Milky Way Planets </h1>
        <div>{planetsList}</div>
      </div>
    );
  }
}

export default List;
