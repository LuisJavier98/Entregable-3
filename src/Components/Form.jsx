import React from 'react'
import { useState } from 'react'
import Select from 'react-select'

const Form = ({ data, dataL, change, doChange, locationG }) => {
const locations = locationG?.map(function(g) { return {label:g.name,value:g.name}})
const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "gray",
    borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
    borderColor: state.isFocused ? "gray" : "black",
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      borderColor: state.isFocused ? "black" : "black"
    }
  }),
  menu: base => ({
    ...base,
    borderRadius: 0,
    marginTop: 0
  }),
  menuList: base => ({
    ...base,
    padding: 0
  })
};
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
        styles={customStyles}
        className='card_select'
        options={locations}
        onChange={dataL}/>
      }
    </div>
  )
}

export default Form