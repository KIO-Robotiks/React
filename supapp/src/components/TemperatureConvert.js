import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function TemperatureConvert() {
    const [celsius, setCelsius] = useState("");
    const [fahrenheit, setFahrenheit] = useState("");
    const [direction, setDirection] = useState("");

    function convert() {
        if (direction === "Fahrenheit") {
            const fahrenheitValue = (parseFloat(celsius) * 9/5) + 32;
            setFahrenheit(fahrenheitValue.toFixed(2));
        } else {
            const celsiusValue = (5/9)*(parseFloat(fahrenheit) -32);
            setCelsius(celsiusValue.toFixed(2));
        }
    }

    return ( 
        <div className="dz">
            DZ1
        <TextField
        value={celsius}
        label="Celsius"
        onChange={(e) => {setCelsius(e.target.value); setDirection("Fahrenheit")}}
        />
        <Button variant="contained" onClick={convert} style={{margin: "10px"}}>Convert</Button>
        <TextField
        value={fahrenheit}
        label="Fahrenheit"
        onChange={(e) => {setFahrenheit(e.target.value); setDirection("Celsius")}}
        />
        </div>
     );
}

export default TemperatureConvert;