import Card from "../UI/Card";

const Planet = (props) => {
  return (
    <Card>
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <p>Velocity (km/s) : {props.distance} </p>
      <p>Distance from Sun (million km) : {props.distance}</p>
      <p>{props.description}</p>
    </Card>
  );
};

export default Planet;
