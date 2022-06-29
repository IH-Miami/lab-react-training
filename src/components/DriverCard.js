import React from 'react';
import Rating from './Rating';

const DriverCard = (props) => {
  return (
    <div className="driver-card">
      <img src={props.img} alt="driver" width="100" height="100" />
      <section>
        <h3>{props.name}</h3>
        <Rating>{props.rating}</Rating>
        <p>
          {props.car.model}-{props.car.licensePlate}
        </p>
      </section>
    </div>
  );
};

export default DriverCard;
