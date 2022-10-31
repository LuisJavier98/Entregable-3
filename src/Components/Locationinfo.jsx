import React from 'react'


const Locationinfo = ({ location }) => {
  return (
    <div>
      <h3 className='card_title'>{location?.name}</h3>
      <ul className='card_location'>
        <li style={{textAlign:'center'}}><strong>Type:</strong>{location?.type} </li>
        <li style={{textAlign:'center'}}><strong>Dimension:</strong>{location?.dimension}</li>
        <li style={{textAlign:'center'}}><strong>Population:</strong>{location?.residents.length}</li>
      </ul>
    </div>
  )
}

export default Locationinfo