import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{
        id:nanoid(),
        task:"hello world!"
    }]
}

const TodoSlice=createSlice({
    name: 'todo',
    initialState: initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push({
                id:nanoid(),
                task:action.payload,
                completed: false
            });
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter((t)=>(t.id!==action.payload));
        },
        editTodo:(state,action)=>{
            const todo=state.todos.find((t)=>t.id==action.payload.id);
            if(todo){
                todo.task=action.payload.task;
            }
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find((t) => t.id === action.payload.id);
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
})

export const {addTodo,deleteTodo,editTodo,toggleTodo} = TodoSlice.actions;
export const TodoSliceReducer = TodoSlice.reducer;