import * as types from './action-types'

const loadData = (clientKey) => {
  console.log('oh hai')
  return dispatch => fetch(`https://api.twitch.tv/kraken/users/sing_sing?client_id=${clientKey}`) // Redux Thunk handles these
    .then(res => res.json())
    .then(
      data => dispatch({ type: types.LOAD_DATA_SUCCESS, data }),
      err => dispatch({ type: types.LOAD_DATA_FAILURE, err })
    )
}

export default loadData


// {
//   "display_name": "Sing_sing",
//   "_id": 21390470,
//   "name": "sing_sing",
//   "type": "user",
//   "bio": "MATADOR, COMMUNIST, BROKEN CAPSLOCK AND BEAR WRESTLER. WELCOME TO MY STREAM.",
//   "created_at": "2011-03-28T14:51:57Z",
//   "updated_at": "2017-01-14T03:34:11Z",
//   "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/sing_sing-profile_image-11f10df8952aee16-300x300.jpeg",
//   "_links": {
//     "self": "https://api.twitch.tv/kraken/users/sing_sing"
//   }
// }



//Why are we getting undefined there???



//  axios.get('https://api.twitch.tv/kraken/users/sing_sing?client_id='+ key)
//       .then(function (response) {
//       this.setState.data = response.data.logo
//      })
//   .catch(function (response) {
//      console.log('fail', response)
//      })
     
// Check this out cunt

// action creator
// function loadData(userId) {
//   return dispatch => fetch(`http://data.com/${userId}`) // Redux Thunk handles these
//     .then(res => res.json())
//     .then(
//       data => dispatch({ type: 'LOAD_DATA_SUCCESS', data }),
//       err => dispatch({ type: 'LOAD_DATA_FAILURE', err })
//     )
// }

// export function itemsHasErrored(bool) {
//     return {
//         type: 'ITEMS_HAS_ERRORED',
//         hasErrored: bool
//     };
// }
// export function itemsIsLoading(bool) {
//     return {
//         type: 'ITEMS_IS_LOADING',
//         isLoading: bool
//     };
// }
// export function itemsFetchDataSuccess(items) {
//     return {
//         type: 'ITEMS_FETCH_DATA_SUCCESS',
//         items
//     };
// }


// export function errorAfterFiveSeconds() {
//     // We return a function instead of an action object
//     return (dispatch) => {
//         setTimeout(() => {
//             // This function is able to dispatch other action creators
//             dispatch(itemsHasErrored(true));
//         }, 5000);
//     };
// }

// Now we know what a thunk is, we can write itemsFetchData().

// export function itemsFetchData(url) {
//     return (dispatch) => {
//         dispatch(itemsIsLoading(true));
//         fetch(url)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw Error(response.statusText);
//                 }
//                 dispatch(itemsIsLoading(false));
//                 return response;
//             })
//             .then((response) => response.json())
//             .then((items) => dispatch(itemsFetchDataSuccess(items)))
//             .catch(() => dispatch(itemsHasErrored(true)));
//     };
// }