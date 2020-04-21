import React, { useState, useEffect } from 'react'

export const ProductTypeContext = React.createContext()

export const ProductTypeProvider = (props) => {
  const [productTypes, setProductTypes] = useState([])

  const getProductTypes = () =>
    fetch('http://localhost:8088/productTypes')
      .then((res) => res.json())
      .then(setProductTypes)

  const addProductType = (productType) =>
    fetch('http://localhost:8088/productTypes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productType),
    }).then(getProductTypes)

  useEffect(() => getProductTypes(), [])
  useEffect(() => console.log('PRODUCT APP STATE CHANGED'), [productTypes])

  return (
    <ProductTypeContext.Provider value={{ productTypes, addProductType }}>
      {props.children}
    </ProductTypeContext.Provider>
  )
}
