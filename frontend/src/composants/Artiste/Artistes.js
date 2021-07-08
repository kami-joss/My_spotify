import React,  { useEffect, useState } from 'react';
import "../../styles/style.css"; 
import CoverArtiste from "./CoverArtiste";

export default function Artistes () {
    const[artistes, setArtiste] = useState([]);

    useEffect(() => {
        fetch ('http://localhost:8000/artistes').then((response) => {
            return response.json();
        })
        .then((result) => {
            setArtiste(result);
        })
    }, [])

    return (
        <div className="artistes">
            {artistes.map(artiste => {
                return (
                    <CoverArtiste id={artiste.id} name={artiste.name} photo={artiste.photo} />
                )
            })}
        </div>
    )
}