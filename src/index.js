import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {Provider} from 'react-redux'
import configureStore from './store/configure-store'

// const peeps = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

// const is = {streamers: [{ name: "zac" },
//                         { name: "jesus" },
//                         { name: "dr. steven brule" }]}

const is = {streamers: [{ id: "21390470" }, //sing sing
                        { id: "26301881" }, //sodapoppin
                        { id: "30220059" },  //ESL_SC2
                        { id: "71852806" }  // OgamingSC2
                       ]}
                        // { name: "jesus" },
                        // { name: "dr. steven brule" }]}


const store = configureStore(is)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
