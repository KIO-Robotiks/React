function EventCard(props) {
    return ( 
        <div>
            <div className="">
            <p className="EventCard">{props.name}</p>
            <p className="EventCard">Date: {props.date}</p>
            <p className="EventCard" style={{ color: props.propsBoolean ? 'green' : 'pink'}}>Place: {props.place}</p>
            </div>
        </div>
     );
}
export default EventCard;