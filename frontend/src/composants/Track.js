import React from "react";

export default function Track ({name, mp3}) {
    return (
        <div className="tracks">
            <p> {name} </p>
            <audio controls> 
                <source src={mp3} type="audio/mpeg"></source>
            </audio>
        </div>
    )
}
