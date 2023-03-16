import React from 'react'
import CardProduct from '../../components/CardProduct/CardProduct'

export default function Home() {
  return (
    <div>
      <div>
        <CardProduct
          name={'aqua'}
          price={10000}
          stock={5}
        />
      </div>
      <div></div>
    </div>
  )
}
