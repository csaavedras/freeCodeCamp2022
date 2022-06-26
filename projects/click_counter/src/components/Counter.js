import './styles/counter.css';
import React, { useState } from 'react';
import Button from './Button';


function Counter() {

    const [count, setCount] = useState(0);

    const addClick = () => {
        setCount(count + 1);
    };

    const restartClick = () => {
        setCount(0);
    };

    return(
        <div className="counter_container">
            <Button 
                text='clean'
                isButtonClick={true}
                eventClick={restartClick}
            />
            <div className="counter_display">
              <span>{count}</span>
            </div>
            <Button 
                text='+'
                isButtonClick={false}
                eventClick={addClick}
            />
        </div>
    );
}

export default Counter;
