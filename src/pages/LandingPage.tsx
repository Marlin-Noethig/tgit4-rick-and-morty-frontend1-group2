import {Link} from "react-router-dom";
import "./LandingPage.css"


export default function LandingPage() {
    return (
        <div id={"landing-container"}>
            <h1>Welcome to my Rick and Morty Gallery!</h1>
            <Link to={"/gallery"} id={"gallery-link"}>Enter Gallery</Link>
        </div>
    )
}