import React, {PropTypes} from 'react'

// const  = ({Streamers}) => {
const Streamers = props => {
  const style = {color: "blue" }
                   
  return (
    <div key={props.name}>
      <p style={style}>{props.logo} {props.name} {props.status}</p>
    </div>
    )
}

// .propTypes = {
//   : PropTypes.object.isRequired
// };

export default Streamers
