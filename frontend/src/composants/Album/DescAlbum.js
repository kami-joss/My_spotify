import React from "react";
import "../../styles/style.css"; 

export default function DescAlbum ({id, name, desc, release_date, popularity, cover}) {
    return (
        <div className="album_pres">
                <img src={cover} alt="cover" />
                <div>
                    <h1> {name} </h1>
                    <p> {desc} </p>
                    <p> {release_date} </p>
                    <p> Classement : {popularity < 10 ? popularity + " [TUB]": popularity} </p>
                </div>
            </div>
    )
}