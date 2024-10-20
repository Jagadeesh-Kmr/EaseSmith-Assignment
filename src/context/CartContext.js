import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartITem: () => {},
})

export default CartContext
