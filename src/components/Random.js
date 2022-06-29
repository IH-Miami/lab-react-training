import React from 'react';

const Random = (props) => {
  let randomRange = Math.round(
    Math.random() * (props.max - props.min) + props.min
  );
  return (
    <h3>
      Random number between {props.min} and {props.max} =&gt; {randomRange}
    </h3>
  );
};

export default Random;
