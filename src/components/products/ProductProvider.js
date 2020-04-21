import React, { useState, useEffect } from 'react'

export const ProductContext = React.createContext()

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([])

  const getProducts = () =>
    fetch('http://localhost:8088/products')
      .then((res) => res.json())
      .then(setProducts)

  const addProduct = (product) =>
    fetch('http://localhost:8088/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    }).then(getProducts)

  useEffect(() => getProducts(), [])
  useEffect(() => console.log('PRODUCT APP STATE CHANGED'), [products])

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {props.children}
    </ProductContext.Provider>
  )
}
