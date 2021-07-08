import React from "react";
import { useEffect, useState } from 'react';
import "../../styles/style.css"; 
import {useLocation} from "react-router-dom";
import DescAlbum from "./DescAlbum";
import Track from "../Track";

export default function Album () {
    const[album, setAlbum] = useState([])
    const[tracks, setTracks] = useState([])
    const location = useLocation();
    const album_id = location.state.album_id

    useEffect(() => {
        fetch(`http://localhost:8000/albums/${album_id}`).then((response) => {
            return response.json();
        })
        .then(result => {
            setAlbum(result[0]);
        })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:8000/albums/${album_id}/tracks`)
        .then(response => {
            return response.json();
        })
        .then(result => {
            setTracks(result);
        })
    }, [])

    return (
        <>
            <div className="">
                <DescAlbum 
                    id={album.id} 
                    name={album.name} 
                    desc={album.description} 
                    release_date={album.release_date} 
                    popularity={album.popularity} 
                    cover={album.cover_small} 
                />
            </div>
            <div>
                {tracks.map(track => (
                    <Track key={track.id} name={track.name} mp3={track.mp3} />
                ))}
            </div>
        </>
    )
}