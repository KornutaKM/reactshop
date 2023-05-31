import React from 'react'

const GoodsItem = (props) => {
  const { description, id, name, price, full_background, addToCart } = props
  return (
    <div className='card' id={id}>
      <div className='card-image'>
        <img src={full_background} alt={name} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{name}</span>
        <p className='card-desc'>{description}</p>
      </div>
      <div className='card-action'>
        <button className='btn' onClick={() => addToCart({id, name, price})}>купить</button>
        <span className='right card-price'>{price} руб</span>
      </div>
    </div>
  )
}

export default GoodsItem
