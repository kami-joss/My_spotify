import React from "react";
import { useEffect, useState } from 'react';
import "../../styles/style.css"; 
import CoverAlbum from "./CoverAlbum";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

export default function Albums() {

  const[albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/albums`)
    .then(response => {
      return response.json();
    })
    .then(result => {
      setAlbums(result);
    })
  }, [])

  return (
    <div className="albums">
      {albums.map((album, key) => {
        return(
          <CoverAlbum id={album.id} name={album.name} cover={album.cover_small} />
        )
      })}
    </div>

  );
}

