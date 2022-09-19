import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    filterName: 'all'
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        addFilters: (state, action) => {
            state.filters = action.payload
            state.filtersLoadingStatus = 'idle'
        },
        filterSelect: (state, action) => {
            state.filterName = action.payload
        }
    }
})

const {actions, reducer} = filtersSlice;

export default reducer;
export const {
    addFilters,
    filterSelect
} = actions