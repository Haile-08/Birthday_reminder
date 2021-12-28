import React,{Component} from 'react';
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
      <header className="App-header">
          <div className='box container my-auto py-auto  rounded-lg shadow-white'>
              <h1 className='top font-mono'> 5 Birthdays today</h1>
               
               <button className='btn font-mono my-5 py-2 px-20 rounded-lg bg-opacity-70 bg-red-600 hover:bg-red-500 hover:opacity-100 shadow-white'
               onClick={()=>console.log("clicked")}>Clear all</button>
          </div>
      </header>
    </div>
    )
  }
}


export default App;
