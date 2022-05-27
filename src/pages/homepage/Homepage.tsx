import React, {useState, useEffect} from 'react';
import UserListItem from '../../components/UserListItem';
import './Homepage.css';

interface Props{
  users: User[];
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

const Homepage: React.FC<Props> = ({users}) => {  
  const [selectedUser, setSelectedUser] = useState<User>();
  const [ascending, setAscending] = useState<Boolean>();
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);

  const showUserDetails = (user: User) => {

    setSelectedUser(user);
  };
  
  const setGenderOnChanged = (event : any) => {
    if(event.target.value == "all"){
      setFilteredUsers(users);
    }else{
      const newList = users.filter(user => user.gender == event.target.value);
      setFilteredUsers(newList);
    }
  }

  const sortUsers = () => {
    let sortedUsers : User[] = [];
    if(ascending){
      sortedUsers = filteredUsers.sort((a, b) => a.name.first.localeCompare(b.name.first));
      setAscending(false);
    }else{
      sortedUsers = filteredUsers.sort((a, b) => b.name.first.localeCompare(a.name.first));
      setAscending(true);
    }
    setFilteredUsers(sortedUsers);
  }

  const sortDescending = () => {
    // filteredUsers.sort((a, b) => a.name.first - b.name.first).reverse();
  }

  return (
    <>
        <h1>IO DIGITAL FRONTEND ASSIGNMENT</h1>
        <div onChange={event => setGenderOnChanged(event)}>
              <input type="radio" value="male" name="gender"/> Male
              <input type="radio" value="female" name="gender"/> Female
              <input type="radio" value="all" name="gender"/> Show all
            </div>
            <button className='btn' onClick={() => sortUsers()}>Sorteer</button>
        <section className='section-users'>
          <div className="users-list">
            <h2>Lijst met gebruikers</h2>
            <ul>
            {filteredUsers.map(function(u : User ,i : number){
              return <UserListItem user={u} identifier={i} showDetails={() => showUserDetails(u)}/>
            })}
            </ul>
          </div>
          <div className='user-detail'>
            <h2>Details van de gebruiker</h2>
            <div className='user-card'>
              
              <h3>{selectedUser?.name.title} {selectedUser?.name.first} {selectedUser?.name.last}</h3>
              <img src={selectedUser?.picture.medium}  />

              <p>{selectedUser?.gender}</p>
              <p>{selectedUser?.location.city} {selectedUser?.location.state} - {selectedUser?.location.country}</p>
              <p>{selectedUser?.location.postcode}</p>
              <p>{selectedUser?.location.street.name} {selectedUser?.location.street.number}</p>
              <p>{selectedUser?.email}</p>
              <p>{selectedUser?.phone}</p>
              <p>{selectedUser?.nat}</p>

            </div>
          </div>
        </section>
    </>
  );
}

export default Homepage;





