const initialState = {
    heroes: [],
    heroesLoadingStatus: "idle",
    filters: [],
    filtersLoadingStatus: 'idle',
    filterName: 'all',
    filteredHeroes: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "HEROES_FETCHING":
            return {
                ...state,
                heroesLoadingStatus: "loading",
            };
        case "HEROES_FETCHED":
            return {
                ...state,
                heroes: action.payload,
                filteredHeroes: state.filterName === 'all' ? 
                    action.payload : 
                    action.payload.filter((item) => item.element === state.filterName),
                heroesLoadingStatus: "idle",
            };
        case "HEROES_FETCHING_ERROR":
            return {
                ...state,
                heroesLoadingStatus: "error",
            };
        case "DELETE_ITEM":
            return {
                ...state,
                heroes: state.heroes.filter((item) => item.id !== action.payload),
            };
        case "ADD_ITEM":
            const newArr = [...state.heroes, action.payload];
            return {
                ...state,
                heroes: newArr,
            };
        case 'ADD_FILTERS':
            return {
                ...state,
                filters: action.payload
            }
        case 'FILTER_SELECT':
            return {
                ...state,
                filterName: action.payload,
                filteredHeroes: action.payload === 'all' ? 
                    state.heroes : 
                    state.heroes.filter((item) => item.element === action.payload)
            }
        default:
            return state;
    }
};

export default reducer;
