import React, {useEffect, useState} from "react";
import {Character} from "../model/Character";
import"./GalleryPage.css"
import Gallery from "../components/Gallery";

type GalleryPageProps = {
    characters: Character[]
    currPage: number
    lastPage: number
    setCurrPage: React.Dispatch<React.SetStateAction<number>>
}

export default function GalleryPage ({characters,currPage,lastPage, setCurrPage}: GalleryPageProps){

    const increaseCount = () => setCurrPage(currPage + 1)
    const decreaseCount = () => setCurrPage(currPage - 1)



    return (
        <div className="App">
            <div className={"number-buttons"}>
                <span>
                    {currPage > 1? <button onClick={decreaseCount}>previous Page</button> : null}
                    {currPage < lastPage ? <button onClick={increaseCount}>next Page</button>: null}
                </span>
                <p>Current Page: {currPage}</p>
                <button id={"show-all-button"} >SHOW ALL</button>
            </div>
            <Gallery characters={characters}/>
        </div>
    );
}