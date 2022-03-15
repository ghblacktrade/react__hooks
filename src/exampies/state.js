import React, {useState} from "react";


function App() {

    const [state, setState] = useState({
        title: 'Counter',
        date: Date.now()
    })
    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter +1)
    }
    function decrement() {
        setCounter(counter -1)
    }


    function updateTitle() {
        setState( prev => {
            return {
                ...prev,
                title: 'new name'
            }
        })
    }


    return (
        <div>
            <h1>Data {counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={updateTitle}>Changed name</button>



            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    )
}
export default App