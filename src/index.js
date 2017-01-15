import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {Provider} from 'react-redux'
import configureStore from './store/configure-store'

const is = {streamers: [{ id: "21390470" }, //sing sing
                        { id: "26301881" }, //sodapoppin
                        { id: "30220059" }, //ESL_SC2
                        { id: "71852806" }, //OgamingSC2
                        { id: "79776140" }, //freecodecamp
                        { id: "82534701" }, //noobs2ninjas                        
                        { id: "86238744" }, //storbeck
                        { id: "6726509"  }, //habathcx
                        { id: "90401618" }, //cretetion
                        // { id: "90401618" }, //brunofin
                       ]}

const store = configureStore(is)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
