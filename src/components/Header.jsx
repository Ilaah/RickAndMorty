import React from 'react'
import InputSearch from './InputSearch'

const Header = ({ setSearchLocation }) => {
  return (
    <header className='header'>
      <nav className='header__navbar'>
        <InputSearch setSearchLocation={setSearchLocation} />
      </nav>

      <div className='input__desktop'>
        <InputSearch setSearchLocation={setSearchLocation} />
      </div>

      <h2 className='header__title'>Rick and Morty Wiki</h2>
    </header>
  )
}

export default Header