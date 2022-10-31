import React, { useState } from 'react'

const Album = ({ name, release, cover }) => {

    const [pokemonCount, setPokemonCount] = useState(num)

    const catchAPokemon = () => {
        let newCount = pokemonCount + 1
        setPokemonCount(newCount)
    }

    return (
        <>
            <h1>Album name: {name}</h1>
            <h2>Release date: {release}</h2>
            <img src={cover}></img>
        </>
    )
}

export default TrainerCard