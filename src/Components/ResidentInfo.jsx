import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Next from '../Images/arrow-next.svg'
import Before from '../Images/arrow-before.svg'

const ResidentInfo = ({ location, data, dataL, move, setmove }) => {

    const [resident, setresident] = useState()
    const number=6
    let id
    id = location?.residents.map(r => Number(r.slice(r.lastIndexOf('/') + 1, r.length)))
    useEffect(() => {
        if (id && id != "") {
            URL = `https://rickandmortyapi.com/api/character/${id}`
            axios.get(URL)
                .then(function (res) {
                    let arr = []
                    if (Array.isArray(res.data)) {
                        for (let i = move; i < move + number; i++) {
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
        setmove(move + number)
    }
    const handleBefore = () => {
        if (move > 0)
            setmove(move - number)
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
            {id?.length > number ?
                <>{move ? <button className='button_p' onClick={handleBefore}><img src={Before} alt="Before" /></button> : " "} {resident?.length % number ? " " : <button className='button_p' onClick={handleNext}><img src={Next} alt="Next" /></button>}</> : " "}
            </div>
        </div>
    )
}
export default ResidentInfo
