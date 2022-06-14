import axios from 'axios'
import React, { useState, useEffect } from 'react'
import useCharacterApi from '../hooks/useCharacterApi'

const CardCharacter = ({ resident }) => {

    const character = useCharacterApi(resident)

    console.log(character)

    return (
        <article className='card'>
            <img src={character?.image} alt="" className='card__img'/>
            <h2 className='card__name'>{character?.name}</h2>
            <p className='card__info'>Status: {character?.status}</p>
            <p className='card__info'>Origin: {character?.origin.name}</p>
            <p className='card__info'>Appearances: {character?.episode.length}</p>
        </article>
    )
}

export default CardCharacter