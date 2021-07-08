import React from "react";
import { useEffect, useState } from 'react';
import "../styles/style.css"; 
import CoverAlbum from "./Album/CoverAlbum";
const { 
  getArrayOfInt
} = require('../utils/utils');

export default function Accueil () {

    const[albums, setAlbums] = useState([]);
  
    useEffect(() => {
      fetch(`http://localhost:8000/albums`)
      .then(response => {
        return response.json();
      })
      .then(result => {
        let indexs = getArrayOfInt(result)
        setAlbums(indexs);
      })
    }, [])
      
      return (
          <div className="albums">
              {albums.map(album => {
                  return (
                      <CoverAlbum id={album.id} name={album.name} cover={album.cover_small} />
                  )
              })}
          </div>
      )
}
