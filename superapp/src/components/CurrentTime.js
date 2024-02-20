import { useEffect, useState } from "react";

function CurrentTime() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, [])
    // let currentDate = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return ( 
        <div className="currentTime">
            <h4>Current Time:</h4>
            <h4>{time.toLocaleTimeString()}</h4>
        </div>
     );
}

export default CurrentTime;