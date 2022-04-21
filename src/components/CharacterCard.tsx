import {Character} from "../model/Character";
import "./CharacterCard.css";
import {useNavigate} from "react-router-dom";

type CharacterCardProps = {
    character: Character
}

export default function CharacterCard({character}: CharacterCardProps) {
    const navigate = useNavigate()

    const onCardClick = () =>{
        navigate(`character/${character.id}`)
    }


    return <div className={"character-card"}onClick={onCardClick}>
        <h2> {character.name} </h2>
        <img src={character.image} alt={character.name}/>
    </div>
}