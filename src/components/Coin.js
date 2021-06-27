import React from 'react';
import '../css/index.css';

function Coin({id, image, name, symbol, market_cap, current_price, total_volume, price_change_percentage_24h}) {
  return (
    <div className="coin">
      <div className="coin__image claster"><img src={image} alt={symbol} className="icon"/></div>
      <div className="coin__name claster">{name}</div>
      <div className="coin__symbol claster">{symbol}</div>
      <div className="coin__market_cap claster">{market_cap}<span className="unit">USD</span></div>
      <div className="coin__total_volume claster">{total_volume}<span className="unit">USD</span></div>
      {price_change_percentage_24h > 0 ? <div className="coin__price_change_24h claster growth">{price_change_percentage_24h}<span className="persentage_char">%</span></div> : <div className="coin__price_change_24h claster drop">{price_change_percentage_24h}<span className="persentage_char">%</span></div>}
      <div className="coin__current_price claster">{current_price}<span className="unit">USD</span></div>
    </div>
  )
}

export default Coin;