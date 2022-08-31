import React, { useState } from 'react'
import LocationInfo from './components/LocationInfo'
import CardCharacter from './components/CardCharacter'
import useLocationApi from './hooks/useLocationApi'
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