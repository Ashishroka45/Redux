import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello ashish" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text,
      };
      state.todos.push(todo);
    },
    removeToDo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
    // updateToDo:(state,action)=>{


    //     const id=action.payload.id
    //     const text=action.payload.text
    //     state.todos=state.todos.map((todo)=>{
    //         if(todo.id===id) return todo.text=text
    //            return todo
    //     })

    // }
  },
});

export const {addToDo,removeToDo} = todoSlice.actions
 export default todoSlice.reducer