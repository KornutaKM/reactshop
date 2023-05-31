import React from 'react'
import GoodsItem from './GoodsItem'

const GoodsList = (props) => {
  const { goods = [], addToCart } = props
  if (!goods.length) {
    return <h3>Nothing</h3>
  } else
    return (
      <div className='goods'>
        {goods.map((item) => (
          <GoodsItem key={item.id} {...item} addToCart={addToCart} />
        ))}
      </div>
    )
}

export default GoodsList
