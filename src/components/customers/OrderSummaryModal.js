import React, { useContext } from 'react'
import { CustomerProductContext } from './CustomerProductProvider'
import { ProductContext } from '../products/ProductProvider'

export default () => {
  const { customerProducts } = useContext(CustomerProductContext)
  const { products } = useContext(ProductContext)
  const activeUser = parseInt(localStorage.getItem('kandy_customer'))

  const filteredRelations = customerProducts.filter((rel) => {
    return rel.customerId === activeUser
  })
  const matchingProducts = filteredRelations.map((rel) => {
    products.find((p) => p.id === rel.productId)
  })

  return (
    <>
      <table className="orderSummary">
        <thead>
          <tr>
            <th>Candy</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {matchingProducts.map((p) => (
            <>
              <tr>{p.name}</tr>
              <tr>${p.price}</tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  )
}
