import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
  {/* props.children will give us the content between the opening and closing tag of this case, Card */}
  {/* classes.card is our custom made css class from the Card.module.css file and props.className is passed on my the parent */}
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
