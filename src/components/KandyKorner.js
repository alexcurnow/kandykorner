import React from 'react'
import { LocationProvider } from './locations/LocationProvider'
import LocationList from './locations/LocationList'
import { ProductProvider } from './products/ProductProvider'
import ProductList from './products/ProductList'

export default () => (
  <>
    <h2>🍭 Welcome to Kandy Korner 🍭</h2>

    <h2>Locations</h2>
    <LocationProvider>
      <LocationList />
    </LocationProvider>

    <h2>Products</h2>
    <ProductProvider>
      <ProductList />
    </ProductProvider>
  </>
)
