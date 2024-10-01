import { configureStore } from '@reduxjs/toolkit';
import TodoSlice from './Todoslice';

const store = configureStore({
    reducer: {
        Todo: TodoSlice,  
    },
});

export default store;
