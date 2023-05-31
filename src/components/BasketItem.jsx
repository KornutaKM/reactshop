import React from 'react'
const BasketItem = ({
  id,
  name,
  price,
  quantity,
  removeOrder,
  decQuantity,
  incQuantity,
}) => {
  return (
    <li className='collection-item'>
      {name} 
      <i className='material-icons decremente' onClick={() => decQuantity(id)}>
        remove
      </i>
      {quantity}шт
      <i className='material-icons incremente' onClick={() => incQuantity(id)}>
        add
      </i>{' '}
      =  {price * quantity} руб
      <span className='secondary-content'>
        <i
          className='material-icons basket-delete'
          onClick={() => removeOrder(id)}
        >
          close
        </i>
      </span>
    </li>
  )
}

export default BasketItem
