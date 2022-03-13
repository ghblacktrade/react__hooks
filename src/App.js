import React, {useState} from "react";


function App() {


    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter +1)
    }
    function decrement() {
        setCounter(counter -1)
    }


    return (
        <div>
            <h1>Data {counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
export default App