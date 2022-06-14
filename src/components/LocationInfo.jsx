import React from 'react'

const LocationInfo = ({location}) => {
  return (
    <article className='location'>
        <h2 className='location__name'>{location?.name}</h2>
        <ul className='location__list'>
            <li className='location__info'><span className='location__info-decoration'>Type: </span> {location?.type}</li>
            <li className='location__info'><span className='location__info-decoration'>Dimension: </span>{location?.dimension}</li>
            <li className='location__info'><span className='location__info-decoration'>Population: </span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo