import {Link, useNavigate, useParams} from "react-router-dom";
import {Character} from "../model/Character";
import "./CharacterDetails.css";



type CharacterDetailsProps = {
    characters: Character[]
}

export default function CharacterDetails({characters}:CharacterDetailsProps){
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id

    if (id === undefined){
        navigate("/")
        return (<></>)
    }

    const character = characters.find(character => character.id === parseInt(id))

    if (character === undefined){
        return(<>Character not found!</>)
    }

    return(
        <div className={"character-details"}>
            <h1>{character.name}</h1>
            <div className={"details-wrapper"}>
            <img src={character.image} alt={character.name}/>
            <div className={"character-credentials"}>
                <p>Gender: {character.gender}</p>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
                <p>Origin: {character.origin.name}</p>
                <p>Current location: {character.location.name}</p>
                <Link to={"/gallery"} className={"back-button"}>Back</Link>
            </div>
            </div>
        </div>

    )
}