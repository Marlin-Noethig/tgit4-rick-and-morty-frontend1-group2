import React from 'react';
import './App.css';

import Title from "./components/Title";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GalleryPage from "./pages/GalleryPage";
import Imprint from "./pages/Imprint";

function App() {

    return (
        <BrowserRouter>
            <Title/>
            <Routes>
                <Route path={"/"} element={<LandingPage/>}/>
                <Route path={"/gallery"} element={<GalleryPage/>} />
                <Route path={"/imprint"} element={<Imprint/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
