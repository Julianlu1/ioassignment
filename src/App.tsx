import React, {useState, useEffect} from 'react';

import './App.css';
import { fetchUsers } from './services/userService';
import Homepage from './pages/homepage/Homepage';

const App : React.FC = () => {
  const [users, setUsers] = useState<any>();
  const [loading, setLoading] = useState(true);

   useEffect(() => {
      fetchUsers().then((response : any) =>{
        setUsers(response.data.results);
        setLoading(false);
        console.log(loading);
       })
  },[]);

  return (
    <div className="App">
      {loading == false && <Homepage users={users}/>}
    </div>
  );
}

export default App;
