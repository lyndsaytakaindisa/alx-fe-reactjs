import React ,{useContext}from 'react'
import UserContext from './UserContext'


const UserProfile = () => {
  const userContext = useContext(UserContext);
    return (
      <div>
        <h2>{userContext.name}</h2>
        <p>Age: {userContext.age}</p>
        <p>Bio: {userContext.bio}</p>
      </div>
    );
  };


export default UserProfile;