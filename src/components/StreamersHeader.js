// import React, {PropTypes} from 'react'
import React from 'react'

const divStyle = {backgroundColor: "grey",
                  // marginBottom: 0
                  height: 50,
                  paddingTop: 20,
                  paddingBottom: 10
}
const headerStyle = {color: 'black', height: 50, margin: 0}

const StreamersHeader = () => {
  return (
    <div style={divStyle}>
      <h1 style={headerStyle}>Twitch Streamers</h1>
    </div>
  )
}

// Header.propTypes = {
//   Header: PropTypes.object.isRequired
// }

export default StreamersHeader
