import React from 'react'

const Form = ({data}) => {
  return (
    <form onSubmit={data}>
    <input id='search' type="text" autoComplete='off'  placeholder='Write a number' />
    <button>Search</button>
  </form>
  )
}

export default Form