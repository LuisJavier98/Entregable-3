import React from 'react'

const Locationinfo = ({ location }) => {
    return (
        <div>
            <h3 className='card_title'>{location?.name}</h3>
            <ul className='card_location'>
                <li><strong>Type:</strong>{location?.type}</li>
                <li><strong>Dimension:</strong>{location?.dimension}</li>
                <li><strong>Population:</strong>{location?.residents.length}</li>
            </ul>
        </div>
    )
}

export default Locationinfo