import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Locationinfo from './Components/Locationinfo'
import Form from './Components/Form'
import ResidentInfo from './Components/ResidentInfo'


function App() {
  const [locationG, setlocationG] = useState()
  const [location, setlocation] = useState()
  const [datasearch, setdatasearch] = useState()
  const [dataLocation, setdataLocation] = useState()
  const [change, setchange] = useState(true)
  const [move, setmove] = useState(0)
  const [group, setgroup] = useState([])

  let doChange = () => {
    setchange(!change)
    setmove(0)
    setgroup([])
    setlocation()
  }
  let random = () => Math.floor(126 * Math.random()) + 1

  const data = e => {
    e.preventDefault()
    setdatasearch(e.target.search.value)
    setdataLocation()
    setmove(0)
    setgroup([])
  }
  const dataL = e => {
    setdataLocation(e.value)
    setgroup([])
    setmove(0)
  }

  useEffect(() => {
    const add=[]
    for (let i=1 ;i<=126;i++){add.push(i)}
    let URL = `https://rickandmortyapi.com/api/location/${add}`
    axios.get(URL)
      .then(res => setlocationG(res.data))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if (dataLocation) {
      let URL = `https://rickandmortyapi.com/api/location/?name=${dataLocation}`
      axios.get(URL)
        .then(res => setlocation(res.data.results[0]))
        .catch(err => window.alert("You have to put a number between 1-126"))
    }
  }, [dataLocation, datasearch])

  useEffect(() => {
    const i = random()
    let URL
    if (change) {
      if (datasearch) {
        URL = `https://rickandmortyapi.com/api/location/${datasearch}`
      }
      else {
        URL = `https://rickandmortyapi.com/api/location/${i}`
      }
      axios.get(URL)
        .then(res => setlocation(res.data))
        .catch(err => window.alert(" You must put a number between 1 and 126"))
    }
    else {
    }
  }
    , [datasearch, dataLocation, change])

  return (
    <div>
      <div className='card_principalImage'/>
      <div className="App">
        <h1 className='card_title'>Rick and Morty Wiki</h1>
        <Form data={data}
          dataL={dataL}
          change={change}
          doChange={doChange}
          locationG={locationG} />
        <Locationinfo
          location={location} />
        <ResidentInfo
          location={location}
          move={move}
          setmove={setmove}
          group={group}
          setgroup={setgroup}/>
      </div>
    </div>)
}
export default App    
