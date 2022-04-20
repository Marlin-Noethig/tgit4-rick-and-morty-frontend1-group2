import React, {useEffect, useState} from "react";
import {Character} from "../model/Character";
import"./GalleryPage.css"
import Gallery from "../components/Gallery";
import CharacterDetails from "../components/CharacterDetails";

type GalleryPageProps = {
    characters: Character[]
}

export default function GalleryPage ({characters}: GalleryPageProps){
    const [currPage, setCurrPage] = useState<number>(1)

    const [characterArray, setCharacterArray] = useState<Character[]>([])
    const [lastPage, setLastPage] = useState<number>(0)

    const increaseCount = () => setCurrPage(currPage + 1)
    const decreaseCount = () => setCurrPage(currPage - 1)



    {/*
    const fetchAllCharacters = ():Character[] =>{
        let allCharacters:Character[] = []
        for(let i = 1; i <= lastPage; i++){
            fetch(`https://rickandmortyapi.com/api/character/?page=${i}`)
                .then(response => response.json())
                .then(body => body.results)
                .then(characters => characters.)
        }
        return allCharacters
    }


    const allCharactersToCharacterArray = () => setCharacterArray(fetchAllCharacters())
        */}



    return (
        <div className="App">
            <div className={"number-buttons"}>
                <span>
                    {currPage > 1? <button onClick={decreaseCount}>previous Page</button> : null}
                    {currPage < lastPage? <button onClick={increaseCount}>next Page</button>: null}
                </span>
                <p>Current Page: {currPage}</p>
                <button id={"show-all-button"} >SHOW ALL</button>
            </div>
            <Gallery characters={characters}/>
        </div>
    );
}