import React, { useState, useEffect } from 'react';
import { API_URI } from './apis/api';
import axios from 'axios';
import Coin from './components/Coin';
import './css/index.css';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [coins, setCoins] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  }
  
  const getData = async() => {
    await axios.get(API_URI)
    .then(response => setCoins(response.data))
    .catch(new Error("Error occured."))
  }

  useEffect(() => {
    getData();
  }, []);

  let filteredCoins = coins.filter(coin => {
    return coin.name.toLowerCase().includes(searchValue.toLowerCase());
  })

  return(
    <div className="wrapper">
      <header>
        <h1 className="main-title">Cryptocurrency Market Tracker</h1>
        <h3 className="main-subtitle"><a href="https://www.coingecko.com/en/api" className="main-subtitle__link">coingecko.com/api</a></h3>
      </header>
      <form className="search__form">
        <input type="text" placeholder="Search currency..." className="search__input" onChange={handleSearch}/>
      </form>
      <div className="coins-panel">
        <div className="tb-header">
          <div className="tb-header__title">Image</div>
          <div className="tb-header__title">Name</div>
          <div className="tb-header__title">Symbol</div>
          <div className="tb-header__title">Market Cap</div>
          <div className="tb-header__title">Total Volume</div>
          <div className="tb-header__title">Change % / 24h</div>
          <div className="tb-header__title">Current Price</div>
        </div>
        {!filteredCoins.length ? <p className="error-info">There is no such cryptocurrency</p> : filteredCoins.map(coin => {
          return (
            <Coin 
              key = {coin.id}
              image = {coin.image}
              name = {coin.name}
              symbol = {coin.symbol}
              market_cap = {coin.market_cap}
              current_price = {coin.current_price}
              total_volume = {coin.total_volume}
              price_change_percentage_24h = {coin.price_change_percentage_24h} 
            />
          )
      })}
      </div>
    </div>
  )
}

export default App;