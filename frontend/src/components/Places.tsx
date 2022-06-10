import {  Link } from "react-router-dom"
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useEffect, useState } from "react";

type Recepies = {
    name: string;
    price: number;
    description: string;
}

type PlacesContainer = {
    name: string;
    recepies: number;
    _id: string;
}

export function Places(){

    const [ places, setPlaces ] = useState<PlacesContainer[]>([])
    

    useEffect(() => {
        fetch('http://localhost:8080/')
        .then(response => response.json())
        .then(data => {
            setPlaces(data);
        })
    })

   
    const placesCard = places.map((place, props) =>
    
        <div key={props} className="cardContainer">
        <Link to ={`/menu/${place.name}`}  style={{textDecoration: 'none'}}>
            <div className="line-infos">
                <div className='home-card' >

                    <h1>{place.name}</h1>
                    <p>{place.recepies} pratos</p>
                </div>  
            </div>   
        </Link>
        
        <div className='line-infos'>
                <Link to={`/register/${place.name}`}>
                    <AiOutlinePlusCircle color="white" size={36} />
                </Link>
        </div>
        </div>
    )
    return(
        <div>
            {placesCard}
        </div>
    )
} 