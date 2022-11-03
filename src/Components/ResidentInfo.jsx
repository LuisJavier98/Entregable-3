import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();

const ResidentInfo = ({ location, move, setmove, group, setgroup, next, setnext }) => {

  const [resident, setresident] = useState()
  const number = 10
  let id = location?.residents.map(r => Number(r.slice(r.lastIndexOf('/') + 1, r.length)))
  let abc = []
  const arrs = function (i) {
    let ab = []
    for (let a = i; a < number + i; a++) {
      if (id[a] != undefined)
        ab.push(id[a])
    }
    return ab
  }
  for (let i = 0; i < id?.length; i = i + number) {
    abc.push(arrs(i))
  }
  useEffect(() => {
    if (id && id != "") {
      setgroup(abc)
      URL = `https://rickandmortyapi.com/api/character/${id}`
      axios.get(URL)
        .then(function (res) {
          if (Array.isArray(res.data)) {
            let m = []
            for (let i = move * number; i < (Number(move) + 1) * number; i++) {
              if (res.data[i] != undefined)
                m.push(res.data[i])
            }
            return setresident(m)
          }
          else return setresident(res.data)

        })

        .catch(err => console.log(err))
    }
    else setresident()
  }, [location, move])


  const after = e => {
    setmove(e.target.id)
    window.scrollTo(
      {
        top: 0,
        behavior: 'smooth'
      }

    )
  }

  const buttonAfter = () => {
    setnext(next + 4)
  }
  const buttonBefore = () => {
    setnext(next - 4)
  }
  return (
    <div className='card_residents'>
      <h2 className='card_Resident' >Residents</h2>
      <div className='card_properties '>
        {resident ?
          (Array.isArray(resident) ?
            resident?.map(a =>
              <div data-aos="fade-up-right" className={a.status}>
                <img className='card_image' src={a.image} alt={a.name} />
                <ul className='card_caracteristics' key={a.id}>
                  <li><strong>{a.name}</strong></li>
                  <li>{a.status}</li>
                  <div style={{ color: "gray" }} >Origin</div>
                  <li>{a.origin.name} </li>
                  <div style={{ color: "gray" }}>Episodes where appear</div>
                  <li>{a.episode.length}</li>
                </ul>
              </div>) :
            <div data-aos="fade-up-right" className={resident.status}>
              <img className='card_image' src={resident.image} alt={resident.name} />
              <ul className='card_caracteristics' key={resident.id}>
                <li ><strong>{resident.name}</strong></li>
                <li >{resident.status}</li>
                <div style={{ color: "gray" }}>Origin</div>
                <li >{resident.origin.name} </li>
                <div style={{ color: "gray" }}>Episodes where appear</div>
                <li >{resident.episode.length}</li>
              </ul>
            </div>)
          : <h6 style={{ color: "white" ,textAlign:'center',fontSize:'18px',display:'block' }}>Doesn't exist residents</h6>
        }
      </div>
      <div 
        className='card_buttonPass'>
        {
          next == 0 ? "" : <button className='button_p' onClick={buttonBefore}>&lt;</button>
        }
        {
          group?.map((g, i) => {
            if (i < 4 + next && i >= next) {
              return <button className='button_p' id={i} onClick={after}>{i + 1}</button>
            }
          }
          )
        }
        {
          group.length >= next + 4 ?
            <button className='button_p' button onClick={buttonAfter}>&gt;</button> : ""
        }
      </div>
    </div >
  )
}
export default ResidentInfo
