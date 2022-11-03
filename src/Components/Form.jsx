import React from 'react'
import { useState } from 'react'
import Select from 'react-select'

const Form = ({ data, dataL, change, doChange, locationG }) => {
  const locations = locationG?.map(function (g) { return { label: g.name, value: g.name } })
  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#25252a",
      borderRadius: state.isFocused ? "10px" : 10,
      borderColor: state.isFocused ? "white" : "black",
      color: "white"
    }),
    valueContainer: base => ({
      ...base,
      color: "white"
    }),
    menu: base => ({
      ...base,
      borderRadius: 0,
      marginTop: 5,
      background: "#25252a",
    }),
    menuList: base => ({
      ...base,
      padding: 5,
      color: "white",
    }),
    placeholder: base => ({
      ...base,
      color: "white"
    }),
    LoadingIndicator: base => ({
      ...base,
      color: "white"
    }),
    input: base => ({
      ...base,
      color: "white"
    })
  };
  return (
    <div className='card_buttons'>
      {change ?
        <div className='card_change' onClick={doChange}><div className='card_circleLeft'></div></div>
        :
        <div className='card_change' onClick={doChange}><div className='card_circleRigth'></div></div>
      }
      {change ?
        <form className='card_search' onSubmit={data}>
          <input id='search' type="text" autoComplete='off' placeholder='Write a number' />
          <button className='button_search'>Search</button>
        </form> :
        <Select
          styles={customStyles}
          className='card_select'
          options={locations}
          onChange={dataL}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              text:'white',
              primary25:'green',
              primary:'gray'
            }
          })
          } />
      }
    </div>
  )
}

export default Form