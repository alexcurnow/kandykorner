import React, { useContext } from 'react'
import { ProductContext } from './ProductProvider'
import Product from './Product'
import { ProductTypeContext } from './ProductTypeProvider'

export default () => {
  const { products } = useContext(ProductContext)
  const { productTypes } = useContext(ProductTypeContext)

  return (
    <div className="products">
      {products.map((product) => {
        const foundProductType = productTypes.find(
          (pt) => pt.id === product.typeId
        )
        return (
          <Product
            key={product.id}
            product={product}
            productType={foundProductType}
          />
        )
      })}
    </div>
  )
}
