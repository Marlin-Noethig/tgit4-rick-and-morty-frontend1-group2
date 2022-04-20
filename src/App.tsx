import React, {useEffect, useState} from 'react';
import './App.css';

import Title from "./components/Title";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GalleryPage from "./pages/GalleryPage";
import Imprint from "./pages/Imprint";
import CharacterDetails from "./components/CharacterDetails";
import {Character} from "./model/Character";
import axios from "axios";

function App() {

    const [characterArray, setCharacterArray] = useState<Character[]>([])
    const [lastPage, setLastPage] = useState<number>(0)
    const [currPage, setCurrPage] = useState<number>(1)

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/?page=${currPage}`)
            .then(response => response.data)
            .then(body => {
                setCharacterArray(body.results)
                setLastPage(body.info.pages)
            })
            .catch(console.error)
    }, [currPage])





    return (
        <BrowserRouter>
            <Title/>
            <Routes>
                <Route path={"/"} element={<LandingPage/>}/>
                <Route path={"/gallery"} element={<GalleryPage
                    characters={characterArray}
                    currPage={currPage}
                    lastPage={lastPage}
                    setCurrPage={setCurrPage}/>} />
                <Route path={"/imprint"} element={<Imprint/>}/>
                <Route path={"gallery/character/:id"} element={<CharacterDetails characters={characterArray} />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
