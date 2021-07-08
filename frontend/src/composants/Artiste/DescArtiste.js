import React from 'react';

export default function DescArtiste ({name, bio, photo}) {
    return (
        <>
            <div className="artiste">  
                <img src={photo} alt="PhotoArtiste"/>
                <p> 
                    {name}
                </p>
            </div>
            <div>
                <p> 
                    {bio} 
                </p>
            </div>
        </>
    )
}