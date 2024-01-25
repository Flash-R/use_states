import React from "react";
import { useState } from "react";


const Basics = () =>{
    let [count, setCount] = useState(0);


    return (
        <div className="basics">
            <h2>{count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>  
        </div>
    )
}

export default Basics