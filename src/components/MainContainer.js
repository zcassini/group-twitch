import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import * as MainActions from '../actions/Main-actions';
// import MainList from './MainList';
// import PersonInput from './PersonInput';
import Header from './Header'
import StreamersList from './StreamersList'
class MainContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      MainContainer: []
    }
  }

  render() {
    // const {Main} = this.props
    return (
      <div>
        <Header />
        <StreamersList />
          
        {/*// <PersonInput addPerson={this.props.actions.addPerson} />*/}
        {/*// <MainList Main={Main} />*/}
      
      </div>
    )
  }
}

// MainContainer.propTypes = {
//   Main: PropTypes.array.isRequired,
//   actions: PropTypes.object.isRequired
// }

function mapStateToProps(state, props) {
  return {
    Main: state.Main
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dispatch)
  //  actions: bindActionCreators(MainActions, dispatch)

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
