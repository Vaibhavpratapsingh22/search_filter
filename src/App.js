import './App.css'
import { useState } from 'react';
import { Users } from './users';
import Table from './Table';
function App() {
  const [searchUser, setSearchUser] = useState('');
  let [currentPage, setCurrentPage] = useState(1);
  let [lastIndex, setLastIndex] = useState(5);
  let [startIndex, setStartIndex] = useState();
  let [mainData, setMainData] = useState(Users.slice(0, 5));
  let newData;

  const keys = ['first_name', 'last_name', 'email'];
  const search = (data) => {
    return data.filter((item) => keys.some(key => item[key].toLowerCase().includes(searchUser)))
  }
  const handleInput = (e) => {
    setSearchUser(e.target.value);
  }
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    setStartIndex(lastIndex);
    setLastIndex(lastIndex + 5);
    newData = Users.slice(startIndex, lastIndex);
    setMainData(newData);

  }
  const prevPage = () => {
    console.log(currentPage);
    if(currentPage>=1){
    setStartIndex(lastIndex-10);
    setLastIndex(startIndex);
    newData = Users.slice(startIndex, lastIndex);
    setMainData(newData);
    console.log(startIndex, lastIndex,currentPage);}

  }

  // console.log(pageNum,Users.slice(1,5));
  return (
    <div className="App flex">
      <input type="text" placeholder="search" onChange={(e) => handleInput(e)} className=" " />

      <Table data={search(mainData)} />
      <div className='flex'>
        <button type='button' onClick={prevPage}>Prev</button>
        <button type='button' onClick={nextPage}>Next</button>

      </div>
    </div>
  );
}

export default App;
