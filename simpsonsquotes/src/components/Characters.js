import React from "react";
import './Characters.css';

function Characters({ character }) {
return (
    <div>
        <figure className="QuoteCard">
        <img src={character.image} alt={character.image}/>
            <figcaption>
                <blockquote>Quotes: {character.quote}</blockquote>
                <p>
                <cite>Character: {character.character}</cite>
                </p>
            </figcaption>
        </figure>
    </div>
);
}

export default Characters;
