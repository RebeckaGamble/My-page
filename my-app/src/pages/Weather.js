import React, { useState } from 'react'
import '../styles/weather.css'
import axios from 'axios'

function Weather() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=ea69752146cd5e7654bbad9f1f05e3f5`
  
  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
    
  }

  return (
    <div className='weather'>
      <h1 className='h1'>Väder app</h1>
      <div className='search'>
      <input 
        type="text" 
        value={location}
        onChange={event => setLocation(event.target.value)}
        placeholder="Ange plats"
        onKeyPress={searchLocation}
      />
      </div>
    <div className='container'>
      <div className='top'>
        <div className='location'>
          <p className='p'>{data.name}</p>
        </div>
        <div className='temp'>
          {data.main ? <h1 className='h'>{data.main.temp.toFixed()}°C</h1> : null}
        </div>
        <div className='description'>
        {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
      </div>

      {data.name != undefined &&
        <div className='bottom'>
        <div className="feels">
          {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
         <p className='p'>Känns som</p>
        </div>
        <div className="humidity">
          {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
          <p className='p'>Fuktighet</p>
        </div>
        <div className="wind">
          {data.wind ? <p className='bold'>{data.wind.speed.toFixed()}km/h</p> : null}
          <p className='p'>Vindhastighet</p>
        </div>
      </div>
      
      }
    </div>
    
    </div>  
  )
}

export default Weather