import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {addToDo} from '../features/todo/todoSlice'

function AddToDo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch()
  const handleSumbit=(e)=>{
    e.preventDefault()
    dispatch(addToDo(input))
    setInput("")
  }
  return (
    <form onSubmit={handleSumbit}>
      <input
        placeholder="Enter ToDo List"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
      <button type="submit">Add ToDo</button>
    </form>
  );
}

export default AddToDo;
