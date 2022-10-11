import React from 'react'
import { useState } from 'react'

const Form = ({ data, dataL, change, doChange, locationG }) => {

  return (
    <div className='card_buttons'>
      {change ?
        <button className='card_change' onClick={doChange}>Search by name</button>
        :
        <button className='card_change' onClick={doChange}>Search by id</button>
      }
      {change ?
        <form onSubmit={data}>
          <input id='search' type="text" autoComplete='off' placeholder='Write a number' />
          <button>Search</button>
        </form> :
        <div>
          <form onSubmit={dataL}>
            <select className='card_box' style={{ color: "white" }}>{locationG.map(g => <option value={g.name}>{g.name}</option>)}</select>
            <button>Search</button>
          </form>
        </div>
      }
    </div>
  )
}

export default Form