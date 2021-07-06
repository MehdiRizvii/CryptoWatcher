import React, {useState, useEffect} from "react";
import './App.css';
import axios from "axios";
function App() {
    const [coins, setCoins] = useState([]);

  useEffect(() => {


    axios.get("  https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false").then(res =>{
setCoins(res.data);
    }).catch(error => console.log(error));
  });

      return (
    <div className="App">
<div className="search">
  <h1 className="text"> Search for Crypto</h1>
<form>
  <input type="text" placeholder="Search" className="coinInput"/>



</form>

</div>



    </div>
  );
}

export default App;
