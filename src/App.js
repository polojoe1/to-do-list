
import './App.css';
import {useState} from "react";
import ToDo from './components/ToDo';
import CreateToDo from './components/CreateToDo';

function App() {
  const [toDoList,setToDoList]= useState([{title:"Wash clothes",status:false},{title:"fold clothes",status:false}]);
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <br />
      <CreateToDo toDoList={toDoList} setToDoList={setToDoList}/>
      <br />
      <ul>
      {
        toDoList.map((el,i)=>{
          return <li key={i}><ToDo i={i} toDoList={toDoList} setToDoList={setToDoList} toDo={el}/></li>
        })
      }
      </ul>
    </div>
  );
}

export default App;
