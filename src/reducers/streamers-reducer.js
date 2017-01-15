import * as types from '../actions/action-types'

export default (state = [], action, id) => {
  console.log("here is the id from the reducer ->", id)
  switch (action.type) {
    case types.LOAD_CHANNELS_SUCCESS:
        console.log('channels loads -- great success')
        console.log(action.data)
        return parseChannel(action.data)
    case types.LOAD_CHANNELS_FAILURE:
        console.log('channels loads -- FAIL')
        return state
    case types.LOAD_STREAMS_SUCCESS:
        console.log('streams loads -- great success')
        console.log(action.data)
        return parseStream(action.data)        
    case types.LOAD_STREAMS_FAILURE:
        console.log('streams loads -- FAIL')
        return state    
    default:
      return state
  }
}

// return [...state, Object.assign({}, action.data)]

const parseStream = (state, data) => {
  // switch (data.stream) {
  //   case null:
  //     return // game = "Offline" status = "Offline"
  //   case undefined:
  //     return // game = "Account Closed" status ="Offline"
  //   default:
  //     return //game = action.data.stream.game status = "Online"
  // }
  return state
}

const parseChannel = (state, data) => {
  //need to get status from state
  const logo = data.logo || "https://placeimg.com/50/50/tech"
  //need to pass in the channel name maybe
  const name = data.display_name || "channel" 
  const description = 'online' === 'online' ?  ': ' + data.status : ""
  const url = data.url
  return state
}
  
  
// $.getJSON(makeURL("channels", channel), function(data) {
//         var logo = data.logo != null ? data.logo : "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F",
//           name = data.display_name != null ? data.display_name : channel,
//           description = status === "online" ? ': ' + data.status : "";
//           html = '<div class="row ' + 
//           status + '"><div class="col-xs-2 col-sm-1" id="icon"><img src="' + 
//           logo + '" class="logo"></div><div class="col-xs-10 col-sm-3" id="name"><a href="' + 
//           data.url + '" target="_blank">' + 
//           name + '</a></div><div class="col-xs-10 col-sm-8" id="streaming">'+ 
//           game + '<span class="hidden-xs">' + 
//           description + '</span></div></div>';
//         status === "online" ? $("#display").prepend(html) : $("#display").append(html);
        
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