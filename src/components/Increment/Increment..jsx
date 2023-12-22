import { Component, useState } from "react";

const Increment = () => {
    const [counter, setCounter] = useState(0)

    const handleIncrement = () => {
        if (counter < 10) setCounter(counter + 1);
    }
    const handleDecrement = () => {
        if (counter > 0) setCounter(counter - 1);
    }

    return (
        <div style={{ color: '#111111', fontSize: '18px' }}>
            <div>Counter: {counter}</div >
            <button style={{ display: 'block' }} onClick={handleIncrement}>Incrementar</button>
            <button style={{ display: 'block' }} onClick={handleDecrement}>Decrementar</button>
            <p>Max: 10</p>
            <p>Min: 0</p>
        </div >
    )
}

export default Increment;