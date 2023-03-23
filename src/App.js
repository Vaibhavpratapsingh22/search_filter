import './App.css'
import { useState } from 'react';
import { Users } from './users';
import Table from './Table';
function App() {
  const [searchUser, setSearchUser] = useState('');
  const handleInput = (e)=>{
    setSearchUser(e.target.value);
  }
  return (
    <div className="App">
     <input type="text" placeholder="search" onChange={(e)=>handleInput(e)} className="search" />
     <ul className="list">
      {Users.filter(user=>user.first_name.toLocaleLowerCase().includes(searchUser)).map((user)=>{
      return(
      <li className="listItem" key={user.id}>{user.first_name}</li>)  
      })}
     </ul>
     <Table />
    </div>
  );
}

export default App;
