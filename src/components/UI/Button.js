import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button className={classes.button} type={props.type || 'button'} onClick={props.onClick}>
      {/*Once again children is pre generated and in this case its content is 'Add User' from the AddUser.js file*/}
      {props.children}
    </button>
  );
};

export default Button;
