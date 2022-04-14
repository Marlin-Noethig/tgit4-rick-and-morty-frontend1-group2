import {Character} from "../model/Character";
import "./CharacterCard.css";

type CharacterCardProps = {
    character : Character
}

export default function CharacterCard( { character } : CharacterCardProps ) {
    return <div className = {"character-card"}>
        <h2> {character.name} </h2>
        <img src={character.image}/>
        <h3> Status: {character.status}</h3>
        <h4> Origin: {character.origin.name}</h4>
    </div>
}