import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import loadData from '../actions/streamers-actions'
const key = '35dehjsoksrymi9wv3csgg31ygbs7x'
import * as streamersActions from '../actions/streamers-actions';

import StreamersHeader from './StreamersHeader'
import StreamersList from './StreamersList'

class StreamersContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      streamers: []
    }
  }
  
   componentWillMount() {
    console.log('comp will mount')
    loadData(key) // don't forget to pass dispatch
    // this.dispatch(loadData(key)) // don't forget to pass dispatch
  }
  
  render() {
    const {streamers} = this.props
    return (
      <div>
        <StreamersHeader />
        <StreamersList streamers={streamers}/>
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
