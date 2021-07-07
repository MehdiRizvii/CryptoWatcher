import React, {useState, useEffect} from "react";
import './App.css';
import axios from "axios";
import Crypto from './Crypto';
function App() {
    const [cryptos, setCrypto] = useState([]);
    const [search, setSearch] = useState('');

  useEffect(() => {


    axios.get
    ("  https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then(res => {
            setCrypto(res.data);
            console.log(res.data);
        })
        .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
      setSearch(e.target.value);
  };
  const filter = cryptos.filter(crypto =>
      crypto.name.toLowerCase().includes(search.toLowerCase())
  );

      return (
    <div className="App">
<div className="c-search">
  <h1 className="text"> Search for Crypto</h1>
<form>
  <input type="text" placeholder="Search" className="coinInput" onChange={handleChange}/>



</form>

</div>
        {filter.map(crypto => {
            return (
                <Crypto
                    key={crypto.id}
                    name={crypto.name}
                    symbol={crypto.symbol}
                    image={crypto.image}
                    volume={crypto.market_cap}
                    price={crypto.current_price}
                    priceChange={crypto.price_change_percentage_24h}
                />
            );
        })}
    </div>
  );
}

export default App;

