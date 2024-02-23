import { useState } from "react";

function TextInput() {
    const [text, setText] = useState();

    const updateText = (target) => {
        if (target.value.length === 10) {
            target.value = "";
            setText('nothing');
            return;
        }
        setText(target.value);
    };

    return ( 
        <div>
        <p>TextInput</p>
        <input type="text" onChange={(e) => updateText(e.target)} maxLength="15"/>
        <p>{text}</p>
        </div>
     );
}

export default TextInput;