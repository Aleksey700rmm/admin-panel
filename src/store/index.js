import { configureStore } from "@reduxjs/toolkit";
// import heroes from "../components/heroesList/heroesSlice";
import filters from "../components/heroesFilters/filtersSlice";
import { apiSlice } from "../api/apiSlice";

const stringMiddleWare = (store) => (next) => (action) => {
    if (typeof action === "string") {
        return next({
            type: action,
        });
    }
    return next(action);
};

const store = configureStore({
    reducer: { filters, [apiSlice.reducerPath]: apiSlice.reducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(stringMiddleWare, apiSlice.middleware),
    devTools: process.env.NODE_ENV !== "production",
});

export default store;
