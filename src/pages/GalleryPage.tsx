import React, {useEffect, useState} from "react";
import {Character} from "../model/Character";
import Title from "../components/Title";
import Gallery from "../components/Gallery";

export default function GalleryPage (){
    const [currPage, setCurrPage] = useState<number>(1)

    const [characterArray, setCharacterArray] = useState<Character[]>([])
    const [lastPage, setLastPage] = useState<number>(0)

    const increaseCount = () => setCurrPage(currPage + 1)
    const decreaseCount = () => setCurrPage(currPage - 1)
    const fetchCharacters = () => {
        return fetch(`https://rickandmortyapi.com/api/character/?page=${currPage}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("Network Error")
            })
            .catch(console.error)
    }


    useEffect(() => {
        fetchCharacters()
            .then(body => {
                setCharacterArray(body.results)
                console.log(characterArray)
            })
    }, [currPage])

    useEffect(() => {
        fetchCharacters()
            .then(body => {
                setLastPage(body.info.pages)
            })
    }, [])




    return (
        <div className="App">
            <div className={"number-buttons"}>
                <p>Current Page: {currPage}</p>
                <span>
                    {currPage > 1? <button onClick={decreaseCount}>{"previous Page"}</button> : null}
                    {currPage < lastPage? <button onClick={increaseCount}>{"next Page"}</button>: null}
                </span>
            </div>
            <Gallery characters={characterArray}/>
        </div>
    );
}