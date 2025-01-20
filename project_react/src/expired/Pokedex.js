import React from 'react';
import { useRef } from 'react';

function Pokedex() {

    const PokemonName = useRef()

    return (
        <div>
            <h1>Pokedex</h1>
            <input type="text" ref={PokemonName}   />
        </div>
    );
}
export default Pokedex;