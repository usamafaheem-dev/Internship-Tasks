import React from 'react'
import Navbar from './Navbar'
import Card from './Cards'
import CartPage from './CartPage'

const AddToCart = () => {
  return (
    <div>
      <Navbar/>
      {window.location.pathname === '/cart' ? (
        <CartPage />
      ) : (
        <Card />          // Normal products page
      )}
    </div>
  )
}

export default AddToCart
