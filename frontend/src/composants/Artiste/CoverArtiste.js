import React from "react";
import { useHistory } from "react-router-dom";

export default function CoverArtiste ({id, name, photo}) {
    const history = useHistory()

    function handleClick(id_artiste) {
        history.push({
            pathname:`/artiste/${id_artiste}`,
            state: {
                id_artiste
            }
        });
    }
    return (
        <div className="artiste" onClick={(e) => handleClick(id)}>
            <p> {name} </p>
            <img src={photo} alt="artistePhoto"/>
        </div>
    )
}