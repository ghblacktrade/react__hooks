import React, {useState} from "react";



function App() {


    const [type, setType] = useState('users')


    return (

        <div>
<h1>Resurs: {type}</h1>
            <button onClick={() => setType('users')}>People</button>
            <button onClick={() => setType('todo')}>Todo</button>
            <button onClick={() => setType('posts')}>Posts</button>
        </div>
    )
}
export default App