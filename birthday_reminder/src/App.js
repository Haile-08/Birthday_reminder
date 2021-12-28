import React,{useState} from 'react';

import './App.css';
import data from './Data/data';
import List from './list/list';

function App() {
  const [people,setpeople]= useState(data);
  return(
    <div className="App">
    <header className="App-header">
        <div className='box container my-auto py-auto  rounded-lg shadow-white'>
            <h1 className='top font-mono'> {people.length} Birthdays today</h1>
             <List people={people} />
             <button className='btn font-mono my-5 py-2 px-20 rounded-lg bg-opacity-70 bg-red-600 hover:bg-red-500 hover:opacity-100 shadow-white'
             onClick={()=>setpeople([])}>Clear all</button>
        </div>
    </header>
  </div>
  
  );
}

export default App;
