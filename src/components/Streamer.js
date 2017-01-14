import React, {PropTypes} from 'react'

const Streamer = ({streamer}) => {
  const style = {color: "blue" }
  return (
    <div>
      <p style={style}>{streamer.name}</p>
    </div>
    )
}

Streamer.propTypes = {
  streamer: PropTypes.object.isRequired
}

export default Streamer
