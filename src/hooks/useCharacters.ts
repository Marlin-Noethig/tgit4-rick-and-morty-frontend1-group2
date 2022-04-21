import {useState} from "react";
import {Character} from "../model/Character";
import axios from "axios";


export default function useCharacters (page: number){
    const [characters, setCharacters] = useState<Character[]>([])
    axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(response => response.data)
        .then(body => {
            setCharacters(body.results)
        })
        .catch(console.error)

    return characters
}

