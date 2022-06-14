import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LocationInfo from './components/LocationInfo'
import CardCharacter from './components/CardCharacter'
import useLocationApi from './hooks/useLocationApi'
import InputSearch from './components/InputSearch'
import Header from './components/Header'

const RickAndMortyApp = () => {

    const [searchLocation, setSearchLocation] = useState()

    const location = useLocationApi(searchLocation)

    return (
        <div className='App'>
            <Header setSearchLocation={setSearchLocation} />
            <LocationInfo location={location} />
            <main className='cards'>
                {location?.residents.map(resident => (
                    <CardCharacter
                        resident={resident}
                        key={resident}
                    />
                ))}
            </main>
        </div>
    )
}

export default RickAndMortyApp