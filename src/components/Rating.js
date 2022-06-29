import React from 'react';

const Rating = (props) => {
  let stars = Math.round(props.children);
  let filledStars = '★'.repeat(stars);
  let emptyStars = '☆'.repeat(5 - stars);

  return (
    <p>
      {filledStars}
      {emptyStars}
    </p>
  );
};

export default Rating;
