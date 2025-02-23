import './IdCard.css';



const IdCard = props => {
    
    const fullComponent = (
        <article className="idcard">

            <img src={props.picture} alt={`${props.firstname} ${props.lastName}`} />
            <article>
            <p>Last Name: {props.lastName}</p>
            <p>First Name: {props.firstName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height/100}m</p>
            <p>Date of Birth: {props.birth}</p>
            </article>

        </article>
    )
    return fullComponent
}

export default IdCard