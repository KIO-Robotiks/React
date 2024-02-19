function CurrentTime() {
    let currentDate = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return ( 
        <div className="currentTime">
            <h4>Current Time:</h4>
            <h4>{currentDate}</h4>
        </div>
     );
}

export default CurrentTime;