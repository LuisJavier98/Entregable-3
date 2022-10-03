import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentInfo = ({ location, data }) => {
    const [resident, setresident] = useState()
    let id
    id = location?.residents.map(r => Number(r.slice(r.lastIndexOf('/') + 1, r.length)))
    useEffect(() => {
        if (id && id != "") {
            URL = `https://rickandmortyapi.com/api/character/${id}`
            axios.get(URL)
                .then(res => setresident(res.data))
                .catch(err => console.log(err))
        }
        else setresident()
    }, [data])
    return (
        <div className='card_residents'>
            <h2 >Residents</h2>
            <div className='card_properties'>
                {resident ?
                    (Array.isArray(resident) ?
                        resident?.map(a =>
                            <div className='card_info'>
                                <img className='card_image' src={a.image} alt={a.name} />
                                <ul className='card_caracteristics'>
                                    <li key={a.name}><strong>{a.name}</strong></li>
                                    <li key={a.status}>{a.status}</li>
                                    <div style={{color:"gray"}} >Origin</div>
                                    <li key={a.origin.name}>{a.origin.name} </li>
                                    <div style={{color:"gray"}}>Episodes where appear</div>
                                    <li key={a.episode.length}>{a.episode.length}</li>
                                </ul>
                            </div>) :
                        <div className='card_info'>
                            <img className='card_image' src={resident.image} alt={resident.name} />
                            <ul className='card_caracteristics'>
                                <li key={resident.name}><strong>{resident.name}</strong></li>
                                <li key={resident.status}>{resident.status}</li>
                                <div style={{color:"gray"}}>Origin</div>
                                <li key={resident.origin.name}>{resident.origin.name} </li>
                                <div style={{color:"gray"}}>Episodes where appear</div>
                                <li key={resident.episode.length}>{resident.episode.length}</li>
                            </ul>
                        </div>)
                    :  <h6 style={{color:"white"}}>Doesn't exist residents</h6> 
                }
            </div>
        </div>
    )
}
export default ResidentInfo