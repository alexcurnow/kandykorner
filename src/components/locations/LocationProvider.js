import React, { useState, useEffect } from 'react'

export const LocationContext = React.createContext()

export const LocationProvider = (props) => {
  const [locations, setLocations] = useState([])

  const getLocations = () =>
    fetch('http://localhost:8088/locations')
      .then((res) => res.json())
      .then(setLocations)

  const addLocation = (location) =>
    fetch('http://localhost:8088/locations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(location),
    }).then(getLocations)

  useEffect(() => {
    getLocations()
  }, [])
  useEffect(() => {
    console.log('LOCATION APP STATE CHANGED')
  }, [locations])

  return (
    <LocationContext.Provider value={{ locations, addLocation }}>
      {props.children}
    </LocationContext.Provider>
  )
}
