import React from 'react';

const BoxColor = (props) => {
  return (
    <h4 style={{ backgroundColor: `rgb(${props.r},${props.g},${props.b}` }}>
      rgb({props.r},{props.g},{props.b})
    </h4>
  );
};

export default BoxColor;
