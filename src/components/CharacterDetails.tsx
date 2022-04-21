import {Link, useParams} from "react-router-dom";
import "./CharacterDetails.css";
import useCharacter from "../hooks/useCharacter";





export default function CharacterDetails(){

    const params = useParams()
    const id = params.id


    const character = useCharacter(id)

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