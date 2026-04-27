import React, { useEffect, useState } from 'react'
// import * as React from 'react';
const WeatherApi = () => {


    if (process.env.NODE_ENV !== 'production') {
    // Yeh aapko string return karega jisme owner ki details hongi
    const stack = React.captureOwnerStack();
    console.log("Yeh component yahan se aaya hai:", stack);
  }
  const [data, setData] = useState(null)
  const [city, setCity] = useState('London')
  const [input, setInput] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    setError(null)
    setData(null)
    fetch(`http://api.weatherapi.com/v1/current.json?key=3f8ae6e3b2274ac6a3865056250904&q=${city}&aqi=no`)
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          setError(json.error.message)
        } else {
          setData(json)
        }
      })
  }, [city])

  const handleSearch = () => {
    if (input.trim()) {
      setCity(input.trim())
      setInput('')
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '450px', margin: '0 auto' }}>
      <h2>🌤 Weather App</h2>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKey}
          style={{ flex: 1, padding: '8px', fontSize: '16px' }}
        />
        <button onClick={handleSearch} style={{ padding: '8px 16px', fontSize: '16px' }}>
          Search
        </button>
      </div>

      {error && <p style={{ color: 'red' }}>❌ {error}</p>}
      {!error && !data && <p>Loading...</p>}

      {data && (
        <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px' }}>
          {/* Location */}
          <h3>{data.location.name}, {data.location.region}</h3>
          <p style={{ color: 'gray', marginTop: '-10px' }}>{data.location.country}</p>
          <p>🕐 Local Time: {data.location.localtime}</p>

          {/* Condition */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={`https:${data.current.condition.icon}`} alt="icon" />
            <span style={{ fontSize: '18px' }}>{data.current.condition.text}</span>
          </div>

          {/* Temperature */}
          <p>🌡 Temperature: {data.current.temp_c}°C / {data.current.temp_f}°F</p>
          <p>🤔 Feels Like: {data.current.feelslike_c}°C / {data.current.feelslike_f}°F</p>
          <p>🔥 Heat Index: {data.current.heatindex_c}°C</p>
          <p>💧 Dew Point: {data.current.dewpoint_c}°C</p>

          {/* Wind */}
          <p>💨 Wind: {data.current.wind_kph} kph ({data.current.wind_dir})</p>
          <p>🌬 Gust: {data.current.gust_kph} kph</p>

          {/* Other */}
          <p>💧 Humidity: {data.current.humidity}%</p>
          <p>☁️ Cloud Cover: {data.current.cloud}%</p>
          <p>🌧 Precipitation: {data.current.precip_mm} mm</p>
          <p>👁 Visibility: {data.current.vis_km} km</p>
          <p>📊 Pressure: {data.current.pressure_mb} mb</p>
          <p>☀️ UV Index: {data.current.uv}</p>
          <p>🕐 Last Updated: {data.current.last_updated}</p>
        </div>
      )}
    </div>
  )
}

export default WeatherApi
