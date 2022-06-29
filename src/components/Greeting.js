import React from 'react';

const Greetings = (props) => {
  let greet;
  switch (props.lang) {
    case 'fr':
      greet = 'bonjour';
      break;
    case 'es':
      greet = 'hola';
      break;
    case 'de':
      greet = 'hallo';
      break;
    default:
      greet = 'hello';
      break;
  }

  return (
    <h3>
      {greet} {props.children}
    </h3>
  );
};

export default Greetings;
