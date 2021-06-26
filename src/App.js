import React, { useState, useEffect } from 'react';
import { API_URI } from './apis/api';
import axios from 'axios';
import Coin from './components/Coin';

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
      <h1 className="main-title">Crypto Currency Market Tracker</h1>
      <form className="search__form">
        <input type="text" placeholder="Search currency..." className="search__input" onChange={handleSearch}/>
      </form>
      <div className="coins-panel">
        {filteredCoins.map(coin => {
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