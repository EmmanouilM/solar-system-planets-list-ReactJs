import Card from "../UI/Card";
import "../styles/_planet.scss";

const Planet = (props) => {
  return (
    <Card>
      <div className='content'>
        <div>
          <img className='image' src={props.image} alt={props.name} />
          <h2>{props.name}</h2>
        </div>
        <div>
          <p>
            <span>Velocity (km/s) :</span> {props.velocity}{" "}
          </p>
          <p>
            <span>Distance from Sun (million km) :</span> {props.distance}
          </p>
          <p className='discription'>{props.description}</p>
        </div>
      </div>
    </Card>
  );
};

export default Planet;
