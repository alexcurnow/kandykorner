import React from 'react'
import { LocationProvider } from './locations/LocationProvider'
import LocationList from './locations/LocationList'
import { ProductProvider } from './products/ProductProvider'
import ProductList from './products/ProductList'
import { ProductTypeProvider } from './products/ProductTypeProvider'
import { EmployeeProvider } from './employees/EmployeeProvider'
import EmployeeList from './employees/EmployeeList'
import './KandyKorner.css'

export default () => (
  <>
    <h2>
      <span role="img" aria-label="lollipop">
        🍭
      </span>{' '}
      Welcome to Kandy Korner{' '}
      <span role="img" aria-label="lollipop">
        🍭
      </span>
    </h2>

    <EmployeeProvider>
      <LocationProvider>
        <ProductProvider>
          <ProductTypeProvider>
            <h2>Locations</h2>
            <LocationList />
            <h2>Products</h2>
            <ProductList />
            <h2>Employees</h2>
            <EmployeeList />
          </ProductTypeProvider>
        </ProductProvider>
      </LocationProvider>
    </EmployeeProvider>
  </>
)
