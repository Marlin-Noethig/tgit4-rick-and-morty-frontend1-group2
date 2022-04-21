import React, {useState} from "react";
import {Character} from "../model/Character";
import"./GalleryPage.css"
import Gallery from "../components/Gallery";
import axios from "axios";

type GalleryPageProps = {
    characters: Character[]
    currPage: number
    lastPage: number
    setCurrPage: React.Dispatch<React.SetStateAction<number>>
}

export default function GalleryPage ({characters,currPage,lastPage, setCurrPage}: GalleryPageProps){

    const [allCharacters, setAllCharacters ] = useState<Character[]>([])
    const [allShown, setAllShown] = useState<boolean>(false)

    const increaseCount = () => setCurrPage(currPage + 1)
    const decreaseCount = () => setCurrPage(currPage - 1)

    const showAllCharacters = () => {
        let allCharacters: Character[] = []
        for(let i:number = 1; i <= lastPage; i++){
            axios.get(`https://rickandmortyapi.com/api/character/?page=${i}`)
                .then(response => response.data)
                .then(body => {
                    body.results.forEach((character:Character) => {
                        allCharacters.push(character)
                    })
                })
                .catch(console.error)

        }
        console.log(allCharacters)
        setAllCharacters(allCharacters)
        setAllShown(true)
    }

    const onShowLess = () =>{
        setCurrPage(1)
        setAllCharacters([])
        setAllShown(false)
    }

    return (
        <div className="App">
            <div className={"number-buttons"}>
                <span>
                    {currPage > 1 && !allShown ? <button onClick={decreaseCount}>previous Page</button> : null}
                    {currPage < lastPage && !allShown ? <button onClick={increaseCount}>next Page</button>: null}
                </span>
                {!allShown ? <p>Current Page: {currPage}</p> : null}
                {allCharacters.length === 0 ? <button id={"show-all-button"} onClick={showAllCharacters}>SHOW ALL</button> : null}
                {allCharacters.length !== 0 ? <button onClick={onShowLess}>show less</button> : null}
            </div>
            <Gallery characters={allCharacters.length !==0 ? allCharacters : characters }/>
        </div>
    );
}