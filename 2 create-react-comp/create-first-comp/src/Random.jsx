function Random(){
    let num = Math.random()*100;
    return <h1 style={{'backgroundColor':'#078978'}}>
        Random Number is: {Math.floor(num)}
    </h1>
}

export default Random;