import React from 'react'
import { useParams } from 'react-router-dom'

function CryptoDetail() {
  const { cryptoSymbol, id } = useParams();
  return (
    <>
      <h3>Symbol: {cryptoSymbol}</h3>
      <p>Id {id}</p>
    </>
  )
}

export default CryptoDetail