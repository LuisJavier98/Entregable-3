import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Locationinfo from './Components/Locationinfo'
import Form from './Components/Form'
import ResidentInfo from './Components/ResidentInfo'
import image from './Images/2348073.jpg'



function App() {
  const [location, setlocation] = useState()
  const [datasearch, setdatasearch] = useState()
  const random = Math.floor(126 * Math.random()) + 1

  useEffect(() => {
    const i = random
    let URL
    if (datasearch) {
      URL = `https://rickandmortyapi.com/api/location/${datasearch}`
    }
    else {
      URL = `https://rickandmortyapi.com/api/location/${i}`
    }

    axios.get(URL)
      .then(res => setlocation(res.data))
      .catch(err => console.log(err))
  }, [datasearch])

  const data = e => {
    e.preventDefault()
    setdatasearch(e.target.search.value)
  }

  return (
    <div>
      <img  className='card_principalImage' src='https://indiehoy.com/wp-content/uploads/2022/08/rick-and-morty.jpg' alt="Rick and Morty"  />
      <div className="App">
        <h1 className='card_title'>Rick and Morty Wiki</h1>
        <Form data={data} />
        <Locationinfo
          location={location} />
        <ResidentInfo
          location={location}
          data={data} />
      </div>
    </div>)
}
export default App    
