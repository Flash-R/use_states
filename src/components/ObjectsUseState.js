import React, { useState } from "react";


const ObjectsUseState = ()=>{

    const [coins, setCoins ]= useState({gold: 0, silver: 0, bronze: 0})

    function increaseGold(){
        setCoins({...coins, gold : coins.gold +1});
    }

    return (
        <div>
            <h1>Objects and Use State</h1>
            <h3>Gold: {coins.gold} | Silver: {coins.silver} | Bronze: {coins.bronze} </h3>
            <button onClick={increaseGold}>Increase Gold</button>
            <button onClick={()=>setCoins({...coins, silver: coins.silver+1})}>Increase Silver</button>
            <button onClick={() =>setCoins({...coins, bronze: coins.bronze+1})}>Increase Bronze</button>
        </div>
    )
}

export default ObjectsUseState;