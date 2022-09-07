import React from 'react'

const ToDo = (props) => {
    const changeCheck=() => {
        let copy = props.toDoList;
        copy[props.i].status=!copy[props.i].status;
        
        props.setToDoList([...copy]);
    }
    const deleteThisToDo=()=>{
        let copy = props.toDoList.filter((el,i)=>i!==props.i)
        props.setToDoList([...copy]);
    }
  return (
    <div>
        <h5 style={{display:"inline-block",textDecoration:props.toDo.status?"line-through":"none"}}>{props.toDo.title}</h5>
    <input type="checkbox" checked={props.toDo.status} onChange={changeCheck}/>
    <button style={{backgroundColor:"black",color:"white"}} onClick={deleteThisToDo} >Delete</button>
    </div>

  )
}

export default ToDo