import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    const handleCount = () => {

        setCount(count + 1);
    }
    const addFive = () => {
        setCount(count + 5);
    }

    return (
        <div>
            <h1 >Count {count}</h1>
            <button onClick={handleCount}>Add 1</button>
            <button onClick={addFive}>Add 5</button>
        </div>
    );
}
