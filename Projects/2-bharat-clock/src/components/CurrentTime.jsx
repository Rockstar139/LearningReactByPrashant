function CurrentTime(){
    let dt = new Date();
    return <p className="lead">This is the current time: {dt.toLocaleString()}</p>
}   

export default CurrentTime;