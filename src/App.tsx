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
    const page:number = 1

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(response => response.data)
            .then(body => setCharacterArray(body.results))
            .catch(console.error)
    }, [])

    return (
        <BrowserRouter>
            <Title/>
            <Routes>
                <Route path={"/"} element={<LandingPage/>}/>
                <Route path={"/gallery"} element={<GalleryPage characters={characterArray}/>} />
                <Route path={"/imprint"} element={<Imprint/>}/>
                <Route path={"gallery/character/:id"} element={<CharacterDetails characters={characterArray} />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
