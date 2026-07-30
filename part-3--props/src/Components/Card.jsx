function Card(props){
    return (
        <div>
            <h1>{props.user}</h1>
            <h2>{props.age} years old</h2>
            <h3>{props.domain} Developer</h3>
        </div> 
    )
}
export default Card;