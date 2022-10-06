import React from 'react'
import { useState } from 'react'

const Form = ({ data, dataL, change, doChange,locationG }) => {

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
            <input id='searchL' type="text" autoComplete='off' placeholder='Write a name of location' />
            <button>Search</button>
          </form>
          <div className='card_box'>
            <ul style={{color:"white"}}>{locationG.map(g=><li>{g.name}</li> )}</ul>
          </div>
        </div>
      }
    </div>
  )
}

export default Form