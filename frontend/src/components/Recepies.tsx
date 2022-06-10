import './Recepies.css';
import '../styles/global.css'

import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

type Recepies = {
    name: string;
    price: number;
    description: string;
    id: number;
}

export function Recepies() {

    const {estName} = useParams();

    const [ recepies, setRecepies ] = useState<Recepies[]>([])

    useEffect(() => {
        fetch('http://localhost:8080/register')
        .then(response => response.json())
        .then(data => {
            setRecepies(data);
        })
    })
    
    const recepiesCard = recepies.map((recepie, props) =>
        <div key={props}>
            <div className='recepies-card'>
                <div className='name-price-line'>
                    <h1>{recepie.name}</h1>
                    <p>R$ {recepie.price}</p>
                </div>
                    <p>{recepie.description}</p>
            </div>
        </div>
    )
    return (
        <div className='menu-container'>
            <div className="place-container">
            <div className="place-headline">
                <h1>{estName}</h1>
                <p>{recepies.length + 1?recepies.length: recepies.length -1} pratos</p>
            </div>
            </div>
            {recepiesCard}

            <div>
            </div>
        </div>
    )
}