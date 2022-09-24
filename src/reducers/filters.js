// const initialState = {
//     filters: [],
//     filtersLoadingStatus: 'idle',
//     filterName: 'all'
// };

// const filters = (state = initialState, action) => {
//     switch (action.type) {
//         case 'FILTERS_FETCHING':
//             return {
//                 ...state,
//                 filtersLoadingStatus: 'loading'
//             }
//         case 'FILTERS_FETCHING_ERROR':
//             return {
//                 ...state,
//                 filtersLoadingStatus: 'error'
//             }
//         case 'ADD_FILTERS':
//             return {
//                 ...state,
//                 filters: action.payload,
//                 filtersLoadingStatus: 'idle'
//             }
//         case 'FILTER_SELECT':
//             return {
//                 ...state,
//                 filterName: action.payload,
//             }
//         default:
//             return state;
//     }
// };

// export default filters;
