import React, {useState} from 'react'

const CreateToDo = (props) => {
    const [newToDO,setNewToDo]=useState("")
    const createToDo = (e)=>{
        e.preventDefault();
        props.setToDoList([...props.toDoList,{title:newToDO,status:false}])
    }
  return (
    <div>
        <form onSubmit={createToDo}>
            <label >Create a To-Do </label>
            <input type="text" onChange={(e)=>{setNewToDo(e.target.value)}}/>
            <button>Create</button>
        </form>
        <p>{newToDO}</p>
    </div>
  )
}

export default CreateToDo