export const heroesFetching = () => {
    return {
        type: "HEROES_FETCHING",
    };
};

export const heroesFetched = (heroes) => {
    return {
        type: "HEROES_FETCHED",
        payload: heroes,
    };
};

export const heroesFetchingError = () => {
    return {
        type: "HEROES_FETCHING_ERROR",
    };
};

export const deleteItem = (id) => {
    return {
        type: "DELETE_ITEM",
        payload: id,
    };
};

export const addItem = (newHero) => {
    return {
        type: "ADD_ITEM",
        payload: newHero,
    };
};

export const addFilters = (arr) => {
    return {
        type: 'ADD_FILTERS',
        payload: arr
    }
}

export const filterSelect = (name) => {
    return {
        type: 'FILTER_SELECT',
        payload: name
    }
}