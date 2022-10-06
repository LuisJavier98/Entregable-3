import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentInfo = ({ location, data, dataL, move, setmove }) => {

    const [resident, setresident] = useState()

    let id
    id = location?.residents.map(r => Number(r.slice(r.lastIndexOf('/') + 1, r.length)))
    useEffect(() => {
        if (id && id != "") {
            URL = `https://rickandmortyapi.com/api/character/${id}`
            axios.get(URL)
                .then(function (res) {
                    let arr = []
                    if (Array.isArray(res.data)) {
                        for (let i = move; i < move + 5; i++) {
                            if (i < id.length) { arr.push(res.data[i]) }
                        }
                        return setresident(arr)
                    }
                    else {
                        return setresident(res.data)
                    }
                }
                )
                .catch(err => console.log(err))
        }
        else setresident()
    }, [data, dataL, move])

    const handleNext = () => {
        setmove(move + 5)
    }
    const handleBefore = () => {
        if (move > 0)
            setmove(move - 5)
    }
    console.log(resident)
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
                                    <div style={{ color: "gray" }} >Origin</div>
                                    <li key={a.origin.name}>{a.origin.name} </li>
                                    <div style={{ color: "gray" }}>Episodes where appear</div>
                                    <li key={a.episode.length}>{a.episode.length}</li>
                                </ul>
                            </div>) :
                        <div className='card_info'>
                            <img className='card_image' src={resident.image} alt={resident.name} />
                            <ul className='card_caracteristics'>
                                <li key={resident.name}><strong>{resident.name}</strong></li>
                                <li key={resident.status}>{resident.status}</li>
                                <div style={{ color: "gray" }}>Origin</div>
                                <li key={resident.origin.name}>{resident.origin.name} </li>
                                <div style={{ color: "gray" }}>Episodes where appear</div>
                                <li key={resident.episode.length}>{resident.episode.length}</li>
                            </ul>
                        </div>)
                    : <h6 style={{ color: "white" }}>Doesn't exist residents</h6>
                }
            </div>
            <div className='card_buttonPass'>
            {id?.length > 5 ?
                <>{move ? <button className='button_p' onClick={handleBefore}>Before</button> : " "} {resident?.length % 5 ? " " : <button className='button_p' onClick={handleNext}>Next</button>}</> : " "}
            </div>
        </div>
    )
}
export default ResidentInfo
