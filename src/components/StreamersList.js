import React, {PropTypes, Component} from 'react'
import Streamer from './Streamer'

class StreamersList extends Component {
  // constructor(props) {
  //   super(props)
  //   // this.onAddPersonClick = this.onAddPersonClick.bind(this);
  // }
  componentWillMount() {
    // console.log('comp will mount')
    // console.log(this.props)
    // this.props.dispatch(loadData(key)) // don't forget to pass dispatch huh??? i never call dispatch
    this.props.streamers.forEach(x => {
      console.log('heres a guy named id:') //, x.id, "lets fetch her shit")
      this.props.loadChannels(x.id) // don't forget to pass dispatch
      this.props.loadStreams(x.id) // don't forget to pass dispatch
    })
    
  
  }
  render () {
    const streamersList = this.props.streamers.map(streamer => <Streamer key={streamer.id} streamer={streamer} />)
    
    return (
      <div>
       {streamersList}
      </div>
    )
  }
}

StreamersList.propTypes = {
  streamers: PropTypes.array.isRequired,
  loadChannels: PropTypes.func.isRequired,
  loadStreams: PropTypes.func.isRequired
}

export default StreamersList
