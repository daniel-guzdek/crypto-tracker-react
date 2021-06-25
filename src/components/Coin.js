import React from 'react';

const Coin = ({ key, name, symbol, image, current_price, total_volume, market_cap, price_change_percentage_24h }) => {
  return (
    <div className="single-coin__wrapper">
      <div className="single-coin__image-container"><img src={image} alt={name} /></div>
      <div className="single-coin__name">{name}</div>
      <div className="single-coin__symbol">{symbol}</div>
      <div className="single-coin__market_cap">{market_cap}</div>
      <div className="single-coin__total_volume">{total_volume}</div>
      {price_change_percentage_24h > 0 ? <div className="single-coin__price_change growth">
        {price_change_percentage_24h}</div> : <div className="single-coin__price_change decline">
        {price_change_percentage_24h}
      </div>}
      <div className="single-coin__current_price">{current_price}</div>
    </div>
  )
}

export default Coin;
