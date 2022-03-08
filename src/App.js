import React, {useState} from "react";


function compInitialCounter() {
    return Math.trunc(Math.random()*20)
}

function App() {

    const [counter, setCounter] = useState(compInitialCounter())


    function increment() {
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        setCounter((prevCounter) => {
return prevCounter + 1
        })
        setCounter( prev => prev +1)
    }

    function decrement() {
        setCounter(counter - 1)
    }

    return (
        <div>
            <h1>Cчетчик: {counter}</h1>
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>delete</button>
        </div>
    )
}

export default App;
