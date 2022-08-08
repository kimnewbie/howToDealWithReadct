import { createSlice } from '@reduxjs/toolkit';

const initialStateValues = {
    value: 0
};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialStateValues,
    reducers: {
        increase: (state) => {
            state.value += 1
        },
        decrease: (state) => {
            state.value -= 1
        },
    }
});

export const { increase, decrease } = counterSlice.actions;
export const selectCount = state => state.counter.value;
export default counterSlice.reducer; 