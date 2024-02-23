import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


function ToDoList() {
    const [text, setText] = useState();
    const [arr, setArr] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
      ]);

    // Get new unique ID
    function getNewID() {
        for (let i = 0; i < 1000; i++) {
            if (!arr.some((comment) => comment.id === i)) return i;}
    }

    function clickHandler() {
        if (!text || !text.trim()) {
            return; }
        setArr([...arr, { id: getNewID(), text: text }]);
        setText("");
    };

    function delComment(id) {
        setArr([...arr.filter((comment) => comment.id !== id)]);
    };

    const card = {
          backgroundColor: '#c9ccd1',
          color: 'darkblue',
          border: '2px solid gray',
          borderRadius: '10px',
          marginBottom: '10px',
          maxWidth: '300px',
          wordWrap: 'break-word',
      };

    return ( 
        <div className="dz">
            DZ2
            <TextField value={text} label="new task" onChange={(e) => {setText(e.target.value);}}/>
            <Button variant="outlined" onClick={clickHandler} style={{margin: "10px"}}>add</Button>
            <Divider />
            <div>
                {arr.map((item) => (
                    <Card style={card}>
                    <CardContent>
                        <Typography variant="body2">
                            {item.text}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton
                            size="small"
                            color="error"
                            onClick={() => delComment(item.id)}
                            >delete
                        </IconButton>
                    </CardActions>
                  </Card>
                ))}
            </div>
        </div>
     );
}

export default ToDoList;