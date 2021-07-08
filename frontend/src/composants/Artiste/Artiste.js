import React,  { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import DescArtiste
 from './DescArtiste';
import "../../styles/style.css"; 

export default function Artiste () {
    const[artiste, setArtiste] = useState([])
    const location = useLocation();
    
    useEffect(() => {
        fetch(`http://localhost:8000/artistes/${location.state.id_artiste}`).then((response) => {
            return response.json();
        })
        .then((result) => {
            setArtiste(result[0]);
        })
    }, [])

    return (
        <div> 
            <DescArtiste name={artiste.name} bio={artiste.bio} photo={artiste.photo} />
        </div>
    )
}