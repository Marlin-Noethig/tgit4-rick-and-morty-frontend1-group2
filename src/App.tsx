import React from 'react';
import './App.css';

import Title from "./components/Title";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GalleryPage from "./pages/GalleryPage";
import Imprint from "./pages/Imprint";
import CharacterDetails from "./components/CharacterDetails";

function App() {

    return (
        <BrowserRouter>
            <Title/>
            <Routes>
                <Route path={"/"} element={<LandingPage/>}/>
                <Route path={"/gallery"} element={<GalleryPage/>} />
                <Route path={"/imprint"} element={<Imprint/>}/>
                <Route path={"gallery/character/:id"} element={<CharacterDetails/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
