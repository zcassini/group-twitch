import React, {PropTypes, Component} from 'react'
import Streamer from './Streamer'

class StreamersList extends Component {
  // constructor(props) {
  //   super(props)
  //   // this.onAddPersonClick = this.onAddPersonClick.bind(this);
  // }
  componentWillMount() {
   // this.props.dispatch(loadData(key)) // don't forget to pass dispatch huh??? i never call dispatch
    this.props.streamers.forEach(x => {
      this.props.loadChannels(x.id) // don't forget to pass dispatch
      this.props.loadStreams(x.id) // don't forget to pass dispatch
    })
    
  
  }
  render () {
    const streamersList = this.props.streamers.map(streamer =>
      <Streamer key={streamer.id} streamer={streamer} channel={streamer.channel} stream={streamer.stream} />)
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
