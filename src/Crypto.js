import React from "react"


const Crypto = ({

    name,
    price,
    symbol,
    volume,
    image, priceChange,
})  =>{

    return(

        <div className="container">

            <div className="crypto-row">
                <div className="crypto">
                <img src={image} alt="no"/>
                <h1>{name}</h1>
                <p className="cryptologo">{symbol}</p>
            </div>
                <div className="data">
                    <p className="price">${price}</p>
                    <p className='c-volume'>${volume.toLocaleString()}</p>          {/* toLocaleString shows price with commas    */}
                    {priceChange < 0 ? (
                        <p className='percent red'>{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className='percent green'>{priceChange.toFixed(2)}%</p>
                    )}
                </div>
        </div>
        </div>
    );
};


export default Crypto