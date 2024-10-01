import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Todos: []
};

const TodoSlice = createSlice({
    name: "Todo",
    initialState,
    reducers: {
        Addtodo: (state, action) => {
            state.Todos.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.Todos.splice(action.payload, 1);
        },
        EditTodo: (state, action) => {
            const newdata = prompt("Enter new Value")
            state.Todos.splice(action.payload, 1, newdata)
        }
    }
});

export const { Addtodo, removeTodo, EditTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
