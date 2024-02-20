import { useState } from "react";

function CommentList() {
    const [text, setText] = useState();
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
      ]);
    
    // Get new unique ID
    function getNewID() {
        console.log(comments);
        for (let i = 0; i < 1000; i++) {
            if (!comments.some((comment) => comment.id === i)) return i;
        }           
    }

    function clickHandler() {
        if (!text.trim()) {
            return;
        }
        setComments([...comments, { id: getNewID(), text: text }]);
        setText("");
    };

    function delComment(id) {
        setComments([...comments.filter((comment) => comment.id !== id)]);
    };

    const delStyle = {
        background: "#EEB3B3"
    };
    const addStyle = {
        background: "#8DD686"
    };


    return ( 
        <div>
            <h4>CommentList</h4>
            <label for="input">your comment:</label>
            <input
                onChange={(event) => setText(event.target.value)}
                type="text"
                id="input"
                value={text}
                maxLength={10}                
            />
            <button style={addStyle} onClick={clickHandler}>add to list</button>
            <br></br><br></br>
            <div>
                {comments.map((item) => (
                    <div>{item.text}{item.id} <button style={delStyle} onClick={() => delComment(item.id)}>del</button></div>
                ))}
            </div>
        </div>
     );
}

export default CommentList;