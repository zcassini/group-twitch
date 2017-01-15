import React, {PropTypes} from 'react'

const Streamer = ({streamer, channel, stream}) => {

  console.log(channel)
  const getStatus = () => stream.stream ? channel.status : "Offline"  
  
  const logo = channel ? channel.logo : "https://placeimg.com/50/50/tech"
  const name = channel ? channel.display_name : "...Loading..."
  const url = channel ? channel.url : "#"
  const status = stream ? getStatus() : "...Loading..."
  
  const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'teal',
    border: 'thin solid white'
  }
  
  const logoStyle = {borderRadius: 50,
                     height: 50,
                     width: 50,
                    }
  
  const nameStyle = {fontWeight: 'bold',
                     flex: '1 0 0'
                     
                    }

  const statusStyle = {fontWeight: 'bold',
                       flex: '3 0 0'
                      }

  const logoDivStyle = {flex: '1 0 0', marginTop: 3}
  const nameDivStyle = {flex: '1 0 0', marginTop: 20}
  const statusDivStyle = {flex: '4 0 0', marginTop: 20}
  return (
    <div style={divStyle}>
      <div style={logoDivStyle}>
        <img style={logoStyle} src={logo} />
      </div>
      <div style={nameDivStyle}>
        <a style={{height: 50, textDecoration: 'none', color: 'black'}}href={url}>{name}</a>
      </div>
      <div style={statusDivStyle}>
        <div>{status}</div>
      </div>
    </div>
    )
}

Streamer.propTypes = {
  streamer: PropTypes.object.isRequired,
  channel: PropTypes.object.isRequired,
  stream: PropTypes.object.isRequired
}

export default Streamer


    // <span><img src={logo} /></span>
    //     <span>{streamer.channel.display_name}</span>
    //     <span>{streamer.channel.status}</span>