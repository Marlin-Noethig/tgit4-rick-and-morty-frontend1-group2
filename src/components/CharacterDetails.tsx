import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Character} from "../model/Character";
import ErrorPage from "./ErrorPage";

export default function CharacterDetails(){
    const params = useParams()
    const id = params.id

    const [character, setCharacter] = useState<Character>(Object)

    const fetchSingleCharacter = () => {
        return fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("Network Error")
            })
            .catch(console.error)
    }

    useEffect(() => {
        fetchSingleCharacter()
            .then(body => setCharacter(body))
    }, [])


    return(
        <div>
            <h1>Character {id}</h1>
            <p>{character.name}</p>
            <h3> Status: {character.status}</h3>
            <p className={"gender-tag"}>Gender: {character.gender}</p>
            <h4> Origin: {character.origin.name}</h4>
        </div>

    )
}