import React from 'react'
import { LocationProvider } from './locations/LocationProvider'
import LocationList from './locations/LocationList'

export default () => (
  <>
    <h2>🍭 Welcome to Kandy Korner 🍭</h2>
    <LocationProvider>
      <LocationList />
    </LocationProvider>
  </>
)
