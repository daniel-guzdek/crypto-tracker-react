import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URI } from './api/api';
import Coin from './components/Coin';

function App() {

  const [searchValue, setSearchValue] = useState('');
  const [coins, setCoins] = useState([]);

  const getData = async() => {
    await axios.get(API_URI)
    .then(response => setCoins(response.data))
    .catch(error => console.log(error))
  }

  useEffect(() => getData(), []);

  const handleSearchInput = (e) => {
    setSearchValue({
      searchValue: e.target.value
    })
  }

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div className="wrapper">
      <h1>Crypto Currency Market Tracker</h1>
      <div className="search">
        <h3 className="search-title">Search currency</h3>
        <form className="search-form">
          <input type="text" placeholder="Search coin..." className="search-input" onChange={handleSearchInput}/>
        </form>
      </div>
      <div className="coin-content">
        {filteredCoins.map(coin => {
          return <Coin
            key = {coin.key} 
            name = {coin.name}
            symbol = {coin.symbol}
            image = {coin.image}
            current_price = {coin.current_price}
            total_volume = {coin.total_volume}
            market_cap = {coin.market_cap}
            price_change_percentage_24h = {coin.price_change_percentage_24h}
          />
        })}
      </div>
    </div>
  );
}

export default App;
