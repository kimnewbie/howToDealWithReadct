import { createSlice } from '@reduxjs/toolkit';

const initialStateValues = [
    {
        id: 1,
        text: '리덕스 기초 배우기',
        done: true
    },
    {
        id: 2,
        text: '리액트와 리덕스 사용하기',
        done: false
    }
];


const todoSlice = createSlice({
    name: 'todos',
    initialState: { value: initialStateValues },
    reducers: {
        change_input: (state, action) => {
            // input: action.input
        },
        insert: (state, action) => {
            state.value.push(action.payload);
        },
        toggle: (state, action) => {
            // todos: state.todos.map(todo =>
            // todo.id === action.id ? { ...todo, done: !todo.done } : todo
            // )
        },
        remove: (state, action) => {
            // todos: state.todos.filter(todo => todo.id !== action.id)
        },
    }
});

export const { change_input, insert, toggle, remove } = todoSlice.actions;
export const selectCount = state => state.todos.value;
export default todoSlice.reducer;