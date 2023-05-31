import React from 'react'
import BasketItem from './BasketItem'

const BasketList = ({
  order = [],
  handleBasketShow = Function.prototype,
  removeOrder = Function.prototype,
  decQuantity = Function.prototype,
  incQuantity = Function.prototype,
}) => {
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity
  }, 0)
  return (
    <ul className='collection basket-list'>
      <li className='collection-item active'>Корзина</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            decQuantity={decQuantity}
            incQuantity={incQuantity}
            removeOrder={removeOrder}
            key={item.id}
            {...item}
          />
        ))
      ) : (
        <li className='collection-item'>Корзина пуста</li>
      )}

      <li className='collection-item active'>
        Общая стоимость: {totalPrice} руб
      </li>
      <li className='collection-item'>
        <button className='btn-small'>Оформить</button>
      </li>
      <i className='material-icons basket-close' onClick={handleBasketShow}>
        close
      </i>
    </ul>
  )
}

export default BasketList
