import React from 'react'
import { useState } from 'react'
import Select from 'react-select'

const Form = ({ data, dataL, change, doChange, locationG }) => {
const locations = locationG?.map(function(g) { return {label:g.name,value:g.name}})

  return ( 
    <div className='card_buttons'>
      {change ?
        <button className='card_change' onClick={doChange}>Search by name</button>
        :
        <button className='card_change' onClick={doChange}>Search by id</button>
      }
      {change ?
        <form  className='card_search' onSubmit={data}>
          <input id='search' type="text" autoComplete='off' placeholder='Write a number' />
          <button>Search</button>
        </form> :
        <Select 
        className='card_select'
        options={locations}
        onChange={dataL}/>
      }
    </div>
  )
}

export default Form