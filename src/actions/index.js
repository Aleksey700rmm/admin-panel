// import { heroesFetching, heroesFetched, heroesFetchingError } from "../components/heroesList/heroesSlice";
// import { addFilters } from "../components/heroesFilters/filtersSlice";

// export const fetchHeroes = (request) => (dispatch) => {
//     dispatch(heroesFetching());
//     request("http://localhost:3001/heroes")
//         .then((data) => dispatch(heroesFetched(data)))
//         .catch(() => dispatch(heroesFetchingError()));
// }

// export const fetchFilters = (request) => (dispatch) => {
//     request('http://localhost:3001/filters/')
//         .then(arr => dispatch(addFilters(arr)))
//         .catch(err => console.log(err))
// }

// export const heroesFetching = () => {
//     return {
//         type: "HEROES_FETCHING",
//     };
// };

// export const heroesFetched = (heroes) => {
//     return {
//         type: "HEROES_FETCHED",
//         payload: heroes,
//     };
// };

// export const heroesFetchingError = () => {
//     return {
//         type: "HEROES_FETCHING_ERROR",
//     };
// };

// export const deleteItem = (id) => {
//     return {
//         type: "DELETE_ITEM",
//         payload: id,
//     };
// };

// export const addItem = (newHero) => {
//     return {
//         type: "ADD_ITEM",
//         payload: newHero,
//     };
// };

// export const addFilters = (arr) => {
//     return {
//         type: 'ADD_FILTERS',
//         payload: arr
//     }
// }

// export const filterSelect = (name) => {
//     return {
//         type: 'FILTER_SELECT',
//         payload: name
//     }
// }

// export const filterSelect = (name) => (dispatch) => {
//     setTimeout(() => {
//         dispatch({
//             type: 'FILTER_SELECT',
//             payload: name
//         })
//     }, 1000)
// }
