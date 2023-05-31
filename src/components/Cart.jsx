import React from 'react'

const Cart = (props) => {
  const { order, handleBasketShow = Function.prototype } = props
  return (
    <div
      className='cart blue darken-2 white-text'
      onClick={() => handleBasketShow()}
    >
      <i className='material-icons medium'>shopping_cart</i>
      {order ? <span className='cart-quantity'>{order.length}</span> : null}
    </div>
  )
}

export default Cart
