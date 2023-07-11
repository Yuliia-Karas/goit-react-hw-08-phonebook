import { createSlice } from '@reduxjs/toolkit';
import { FILTER } from './constants';

const filterInitialState = {
  filter: '',
};

const filterSlice = createSlice({
    name: FILTER,
    initialState: filterInitialState,
    reducers: {
        setFilter(state, action) {
            return action.payload;
        },
    },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

