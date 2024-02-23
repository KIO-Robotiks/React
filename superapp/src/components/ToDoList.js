import { useState } from "react";

function ToDoList() {
    const [text, setText] = useState();
    const [arr, setArr] = useState(["Task 1", "Task 2"]);

    function clickHandler() {
        if (!text.trim()) {
            return;
        }
        setArr([...arr, text]);
        setText("");
    };

    return (
        <div>
            <h4>ToDoList</h4>
            <label for="input">Enter your text:</label>
            <input
                onChange={(event) => setText(event.target.value)}
                type="text"
                id="input"
                value={text}
                maxLength={10}                
            />
            <button onClick={clickHandler}>add to list</button>
            <ul>
                {arr.map((item) => (
                    <li key={arr.indexOf(item)}>{item}</li>
                ))}
            </ul>
        </div>
     );
}

export default ToDoList;
