import {Character} from "../model/Character";
import CharacterCard from "./CharacterCard";
import "./Gallery.css";
import {ChangeEvent, useEffect, useState} from "react";

type GalleryProps = {
    characters: Character[]
}

export default function Gallery({characters}: GalleryProps) {

    const [input, setInput] = useState<string>("")
    const [filteredCharacters, setFilteredCharacters] = useState<Character[]>(characters);
    const [savedInput, setSavedInput] = useState<string>("")


    const getInput = (event: ChangeEvent<HTMLInputElement>) => setInput(event.target.value)

    const searchCharacter = () => {
        setFilteredCharacters(characters.filter(character => character.name.toLowerCase().includes(input.toLowerCase())));
        setSavedInput(input)
    }

    const resetInput = () => {
        setInput("");
        setFilteredCharacters(characters);
    }

    useEffect(() => {
        setFilteredCharacters(characters)
    }, [characters])

    return <div>
        <div className={"searchbar"}>
            <label>Search Character</label>
            <input value={input} onChange={getInput} id={"input-field"}/>
            <input type={"submit"} value={"Search"} onClick={searchCharacter}/>
            <button onClick={resetInput}>Reset</button>
        </div>
        {filteredCharacters.length > 0
            ? <div className={"character-gallery"}>{filteredCharacters.map(character => <CharacterCard key={character.id} character={character}/>)}</div>
            : <h1>No character with with name "{savedInput}" "found.</h1>
        }

    </div>
}