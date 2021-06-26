import React from 'react';

function Coin({id, image, name, symbol, market_cap, current_price, total_volume, price_change_percentage_24h}) {
  return (
    <div className="coin">
      <div className="coin__image"><img src={image} alt={symbol}/></div>
      <div className="coin__name">{name}</div>
      <div className="coin__symbol">{symbol}</div>
      <div className="coin__market_cap">{market_cap}</div>
      <div className="coin__total_volume">{total_volume}</div>
      <div className="coin__price_change_24h">{price_change_percentage_24h}</div>
      <div className="coin__current_price">{current_price}</div>
    </div>
  )
}

export default Coin;