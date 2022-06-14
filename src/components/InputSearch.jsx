import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const InputSearch = ({setSearchLocation}) => {


    const searchLocation = e => {
        e.preventDefault()
        setSearchLocation(e.target.children[0].value)
    }

  return (
    <form onSubmit={searchLocation} className= 'input'>
        <input type="text" className='input__box' placeholder='Type a number between 1 to 126'/>
        <button className='input__btn'><FontAwesomeIcon icon= {faMagnifyingGlass} /></button>
    </form>
  )
}

export default InputSearch