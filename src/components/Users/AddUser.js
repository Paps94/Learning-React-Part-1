import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  {/*
    Gonna use array de-structuring. We use it because useState always returns an array
    of 2 elements and with this syntax we get those elements out of the array and store
    them to different constants.

    The first will hold the actual content where are the 2nd 'use...' is the function
    called to update said state adn trigger a re-render
  */}
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    {/* Stop the form from submitting */}
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
    {/* Simple form Validation */}
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    {/*Even though age is a string it should work even if I don't add the + at the start but i do it just to be extra safe*/}
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    {/*Empty the input fields on form submission*/}
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {/*Show modal if error exists (not empty)*/}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        {/*We don't do addUserHandler() cause that would just execute the function and we don't want that. Instead we simply point to it!*/}
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          {/*On change we will call the usernameChangeHandler which in turn calls the setEnteredUsername which will update the username entered on every key stroke*/}
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          {/*On change we will call the ageChangeHandler which in turn calls the setEnteredAge which will update the age entered on every key stroke*/}
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
