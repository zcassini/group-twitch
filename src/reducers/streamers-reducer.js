import * as types from '../actions/action-types'

export default (state = [], action) => {
    console.log('your action sir: ', action.data)
  switch (action.type) {
    case types.LOAD_DATA_SUCCESS:
    //   return [...state, Object.assign({}, action.person)];
        return [...state, Object.assign({}, action.data)]
    case types.LOAD_DATA_FAILURE:
        console.log('FAIL')
        return state
    default:
      return state;
  }
};


// export function itemsHasErrored(state = false, action) {
//     switch (action.type) {
//         case 'ITEMS_HAS_ERRORED':
//             return action.hasErrored;
//         default:
//             return state;
//     }
// }
// export function itemsIsLoading(state = false, action) {
//     switch (action.type) {
//         case 'ITEMS_IS_LOADING':
//             return action.isLoading;
//         default:
//             return state;
//     }
// }
// export function items(state = [], action) {
//     switch (action.type) {
//         case 'ITEMS_FETCH_DATA_SUCCESS':
//             return action.items;
//         default:
//             return state;
//     }
// }