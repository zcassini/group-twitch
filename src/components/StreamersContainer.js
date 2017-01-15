import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as streamersActions from '../actions/streamers-actions'
import StreamersHeader from './StreamersHeader'
import StreamersList from './StreamersList'

class StreamersContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      streamers: []
    }
  }
  
  render() {
    const {streamers} = this.props
    const {loadChannels} = this.props.actions
    const {loadStreams} = this.props.actions
    console.log(this.props)
    return (
      <div>
        <StreamersHeader />
        <StreamersList streamers={streamers}
                       loadChannels={loadChannels}
                       loadStreams={loadStreams}/>
      </div>
    )
  }
}

StreamersContainer.propTypes = {
  streamers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, props) {
  return {
    streamers: state.streamers
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(streamersActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamersContainer)
