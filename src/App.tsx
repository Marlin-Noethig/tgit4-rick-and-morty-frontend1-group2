import React, {useState} from 'react';
import './App.css';

import Title from "./components/Title";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GalleryPage from "./pages/GalleryPage";
import Imprint from "./pages/Imprint";
import CharacterDetails from "./components/CharacterDetails";
import useCharacters from "./hooks/useCharacters";
import useLastPage from "./hooks/useLastPage";

function App() {

    const [currPage, setCurrPage] = useState<number>(1)
    const characters = useCharacters(currPage)
    const lastPage = useLastPage()

    return (
        <BrowserRouter>
            <Title/>
            <Routes>
                <Route path={"/"} element={<LandingPage/>}/>
                <Route path={"/gallery"} element={<GalleryPage
                    characters={characters}
                    currPage={currPage}
                    lastPage={lastPage}
                    setCurrPage={setCurrPage}/>} />
                <Route path={"/imprint"} element={<Imprint/>}/>
                <Route path={"gallery/character/:id"} element={<CharacterDetails />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
