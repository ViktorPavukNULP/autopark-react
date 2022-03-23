import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {autoParkService} from "../services/autoPark.service";

export const getAllAutoParks = createAsyncThunk(
    "autoParkSlice/getAllCars",
    async (_, {rejectWithValue}) => {
        try {
            return await autoParkService.getAll();
        } catch (e) {
            return rejectWithValue(e.message)
        }
    });

const autoParkSlice = createSlice({
    name: "autoParkSlice",
    initialState: {
        autoParks: [],
        status: null,
        error: null
    },
    reducers: {
        addAutoPark: (state, action) => {
            state.autoParks.push(action.payload.data);
        },
        removeAutoPark: (state, action) => {
            state.autoParks = state.autoParks.filter(autoPark => autoPark.id !== action.payload.id)
        }
    }
});

const autoParkReducer = autoParkSlice.reducer;
export const {addAutoPark, removeAutoPark,} = autoParkSlice.actions;
export default autoParkReducer;
