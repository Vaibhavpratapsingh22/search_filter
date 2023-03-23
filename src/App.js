import './App.css'
import { useState } from 'react';
import { Users } from './users';
import Table from './Table';
function App() {
  const [searchUser, setSearchUser] = useState('');
  const search = (data) => {
    return data.filter((item) => (item.first_name.toLowerCase().includes(searchUser)))
  }
  const handleInput = (e) => {
    setSearchUser(e.target.value);
  }
  return (
    <div className="App">
      <input type="text" placeholder="search" onChange={(e) => handleInput(e)} className=" " />
      <Table data={search(Users)} />
    </div>
  );
}

export default App;
