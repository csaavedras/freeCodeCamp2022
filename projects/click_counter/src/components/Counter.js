import React, { useState } from 'react';
import './counter.css';


function Counter(props) {

    const [count, setCount] = useState(0);

    const plusCounter = () => {
        setCount(count + 1);
    }
    const minusCounter = () => {
        setCount(count - 1);
    }
    return(
        <div className="counter_container">
            <button onClick={minusCounter}>-</button>
            <div className="counter_display">
              <span>{count}</span>
            </div>
            <button onClick={plusCounter}>+</button>
        </div>
    );
}

export default Counter;

