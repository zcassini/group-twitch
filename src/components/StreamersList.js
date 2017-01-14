import React, {PropTypes} from 'react'
import Streamers from './Streamers'

// const Header = ({Header}) => {
const StreamersList = props => {
  const names = ["zac", "mr. quisenberry", "tyler.perry"]
  const streamersList = names.map(x => <Streamers name={x} />)
  return (
    <div>
     {streamersList}
    </div>
  )
}


export default StreamersList;
