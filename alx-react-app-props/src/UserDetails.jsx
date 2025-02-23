import React, { useContext } from 'react'
import UserContext from '../UserContext';

function UserDetails() {
    const userContext = userContext(UserContext);
    return (
      <div>
        <p>Name: {userContext.name}</p>
        <p>Email: {userContext.email}</p>
      </div>
    );
  }
  
  export default UserDetails;