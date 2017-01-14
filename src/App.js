import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import MainContainer from './components/MainContainer'
import axios from 'axios';
const key = '35dehjsoksrymi9wv3csgg31ygbs7x'
var userIcon;
var data;

// axios
//   .get(`https://api.twitch.tv/kraken/users/sing_sing/client_id=${key}`)
//   //35dehjsoksrymi9wv3csgg31ygbs7x client key
//   //https://api.twitch.tv/kraken/users/44322889?client_id=XXXXX)
//   .then(function (response) {
//     console.log(response.data);
//     return response;
//   })
//   .finally(function () {
//     console.log('this will always be called');
//   });

// import axios from 'axios';



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


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {logo: "http://beebom.redkapmedia.netdna-cdn.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg"}
  }
  
  handleClick = () => {
    axios.get('https://api.twitch.tv/kraken/users/sing_sing?client_id='+ key)
      .then(function (response) {
      this.setState.data = response.data.logo
     })
   .catch(function (response) {
     console.log('fail', response)
     })
  }
  
  render() {
    console.log("missing", userIcon)
    return (
      <div className="App">
        <div className="App-header">
          <img src={userIcon} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleClick}>heres lost me </button>
        <p> {userIcon} </p>
        <img src={this.state.logo} /> 
     {/* //Main Container Component
        //header  
          //streamers list
            // streamers*/}
        <MainContainer />
        
      </div>
    )
  }
}

export default App;
