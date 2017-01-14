import React, {PropTypes} from 'react'
import Streamer from './Streamer'

const StreamersList = ({streamers}) => {
  // const names = ["zac", "mr. quisenberry", "tyler.perry"]
  console.log(streamers)
  console.log(streamers[2].name)
  const streamersList = streamers.map(streamer => <Streamer key={streamer.name} streamer={streamer} />)
  return (
    <div>
     {streamersList}
    </div>
  )
}

StreamersList.propTypes = {
  streamers: PropTypes.array.isRequired
}

export default StreamersList
