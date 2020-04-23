import React, { useContext } from 'react'
import { ProductContext } from './ProductProvider'
import Product from './Product'
import { ProductTypeContext } from './ProductTypeProvider'
import { CustomerProductContext } from '../customers/CustomerProductProvider'
import { Button } from 'reactstrap'

export default () => {
  const { products } = useContext(ProductContext)
  const { productTypes } = useContext(ProductTypeContext)

  const { addCustomerProduct } = useContext(CustomerProductContext)
  const customerId = localStorage.getItem('kandy_customer')

  const handlePurchaseClickEvent = (product) =>
    addCustomerProduct({
      customerId: parseInt(customerId),
      productId: product.id,
    })

  return (
    <div className="products">
      {products.map((product) => {
        const foundProductType = productTypes.find(
          (pt) => pt.id === product.typeId
        )
        return (
          <>
            <Product
              key={product.id}
              product={product}
              productType={foundProductType}
            />
            <Button
              onClick={() => handlePurchaseClickEvent(product)}
              color="info"
            >
              Purchase
            </Button>
          </>
        )
      })}
    </div>
  )
}
