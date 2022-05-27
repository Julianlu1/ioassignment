import React, {useState, useEffect} from 'react';

interface Props{
  user: User;
  identifier: number;
  showDetails: () => void;
}

interface User{
  gender: string;
  email: string;
  name: {
    title: string,
    first: string,
    last: string
  };
  location: {
    street: {
      number: number,
      name: string
    }
    city: string,
    state: string,
    country: string,
    postcode: string
  };
  phone: number
  picture: {
    medium : string
  };
  nat: string;
}


// Implement React.memo for better performance.
// Prevents child rerender when parent needs a rerender
const UserListItem: React.FC<Props> = ({user, identifier, showDetails}) => {  
  return (
    <li onClick={showDetails} key={identifier}>
                 <div className='single-user'>
              <div className='user-image'>
                <img src={user.picture.medium}  />
              </div>
              <div className='user-information'>
                <h3>{user.name.title} {user.name.first} {user.name.last}</h3>
                <p>{user.location.city} {user.location.state} - {user.location.country}</p>
              </div>
            </div>
              </li>
  );
}

export default UserListItem;
