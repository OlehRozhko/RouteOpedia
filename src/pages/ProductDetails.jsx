import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
  const { productId } = useParams();
  return (
    <>
      <h3>ProductDetails</h3>
      {productId ? <p>Id: {productId} </p> : null}
    </>
  )
}

export default ProductDetails