import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    {/*
      When your setState depends on a previous list you need to use an alternative form of setUserList by passing a function
      to is and that function will get the latest setUser snapshot when react performs that state update.

      In this case I called it prevUsersList and you should return the new state snashpot in the body of this function
    */}
    setUsersList((prevUsersList) => {
      {/* Copy all elements of the previous snapshot state using the spread operator and adds them to this new array */}
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
