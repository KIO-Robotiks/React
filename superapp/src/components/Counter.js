import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    const plusCounter = () => {
        setCounter(counter + 1);
    }
    const resetCounter = () => {
        setCounter(0);
    }

    return ( 
        <div>
            <span>Counter</span>
            <br></br>
            <span>{counter}</span>
            <br></br>
            <button onClick={plusCounter}>click me</button>
            <br></br>
            <button onClick={resetCounter}>reset</button>
        </div>
     );
}

export default Counter