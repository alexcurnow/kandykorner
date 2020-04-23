import React, { useState, useEffect } from 'react'

export const CustomerProductContext = React.createContext()

export const CustomerProductProvider = (props) => {
  const [customerProducts, setCustomerProducts] = useState([])

  const getCustomerProducts = () =>
    fetch('http://localhost:8088/customerProducts')
      .then((res) => res.json())
      .then(setCustomerProducts)

  const addCustomerProduct = (customerProduct) =>
    fetch('http://localhost:8088/customerProducts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customerProduct),
    }).then(getCustomerProducts)

  useEffect(() => {
    getCustomerProducts()
  }, [])
  useEffect(() => {
    console.log('CUSTOMER PRODUCT APP STATE CHANGED')
  }, [customerProducts])

  return (
    <CustomerProductContext.Provider
      value={{ customerProducts, addCustomerProduct }}
    >
      {props.children}
    </CustomerProductContext.Provider>
  )
}
