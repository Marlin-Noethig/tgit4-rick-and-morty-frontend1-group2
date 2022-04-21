import {useState} from "react";
import axios from "axios";

export default function useLastPage(){
    const [lastPage, setLastPage] = useState<number>(0)
    axios.get(`https://rickandmortyapi.com/api/character/`)
        .then(response => response.data)
        .then(body => {
            setLastPage(body.info.pages)
        })
        .catch(console.error)
    return lastPage
}