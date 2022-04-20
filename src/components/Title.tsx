import "./Title.css"
import {Link} from "react-router-dom";

export default function Title() {
    return <header>
        <img id={"rm-logo"} src={"https://rickandmortyapi.com/icons/icon-512x512.png"} alt={"Rick and Morty Logo"}/>
        <h1>Rick & Morty Character Gallery</h1>
        <nav>
            <Link to={"/"} className={"nav-link"}>Home</Link>
            <Link to={"/gallery"} className={"nav-link"}>Gallery</Link>
            <Link to={"/imprint"} className={"nav-link"}>Imprint</Link>
        </nav>
    </header>
}