import "./Home.css"
import { Places } from './Places'
import { Header } from './Header'
import { useState, useEffect } from "react"


type PlacesContainer = {
    name: string;
    recepies: number;
}

export function Home(){


    const [ places, setPlaces ] = useState<PlacesContainer[]>([])

    useEffect(() => {
        fetch('http://localhost:8080/')
        .then(response => response.json())
        .then(data => {
            setPlaces(data);
        })
    })

    const placeCard = places.map((place, props) => {
    })

    return (
 
    <div>

        <Header />
        <div className='menu-box'>
            <div className='places-box'>
                <h1 className='places-title'>Lugares</h1>
                <p className='places-text'>{placeCard.length} lugares cadastrados</p>

                <Places />
            </div>
        </div>
    </div>
    )
}