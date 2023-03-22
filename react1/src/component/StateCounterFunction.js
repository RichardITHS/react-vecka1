import React, { useState } from 'react'

function CounterFunction() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h4>
                I denna functional component använder vi useState och du har nu
                klickat {count}
            </h4>
            <button onClick={() => setCount(count + 1)}>Öka värdet</button>
        </div>
    )
}

export default CounterFunction
