import React from 'react'
const Locationinfo = ({ location }) => {

  const number = location?.residents.length
  
  return (
    <div>
      <h3 className='card_title2'>{location?.name}</h3>
      <ul className='card_location'>
        <li style={{ textAlign: 'center' }}>
          <span className='card_type' style={{ textAlign: 'center', animationTimingFunction: `steps(${location?.type.length + 5})`, width: `${location?.type.length + 5}ch` }}>Type:{location?.type}</span>
        </li>
        <li style={{ textAlign: 'center' }}>
          <span className='card_dimension' style={{ textAlign: 'center', animationTimingFunction: `steps(${location?.dimension.length + 10})`, width: `${location?.dimension.length + 10}ch` }}>Dimension:{location?.dimension}</span>
        </li>
        <li >
          <span className='card_population' style={{ textAlign: 'center', animationTimingFunction: `steps(${number?.toString().split('').length + 11})`, width: `${number?.toString().split('').length + 11}ch` }}>
            Population:{location?.residents.length}
          </span>
        </li>
      </ul>
    </div>
  )
}

export default Locationinfo