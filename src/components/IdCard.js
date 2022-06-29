import React from 'react';

const IdCard = (props) => {
  return (
    <div className="id">
      <img src={props.picture} alt="pic" />
      <section>
        <p>
          <b>First name:</b>
          {props.firstName}
        </p>
        <p>
          <b>Last name:</b>
          {props.lastName}
        </p>
        <p>
          <b>Gender:</b>
          {props.gender}
        </p>
        <p>
          <b>Height:</b>
          {props.height}
        </p>
        <p>
          <b>Birth:</b>
          {props.birth.toString()}
        </p>
      </section>
    </div>
  );
};

export default IdCard;
