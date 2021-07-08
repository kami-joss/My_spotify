import React from "react";
import "../../styles/style.css"; 
import { useHistory } from "react-router-dom";

function CoverAlbum ({id, name, cover}) {

    const history = useHistory();

    function handleClick (album_id) {
        history.push({
          pathname: `/album/${album_id}`,
          state: {
            album_id
          }
        })
      } 

    return (
        <div className="album" onClick={(e) => handleClick(id)}>
            <p> 
                {name} 
            </p>
            <img src={cover} alt="cover"/>
        </div>
    )
}

export default CoverAlbum;