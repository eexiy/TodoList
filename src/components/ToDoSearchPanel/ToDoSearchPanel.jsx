import React from 'react'

import backIcon from '../../assets/icons/arrow.svg'
import closeIcon from '../../assets/icons/close.svg'
import './ToDoSearchPanel.scss'

const ToDoSearchPanel = ({ handleBack, searchInput, setSearchInput, handleClose }) => {
    
    const handleSearchInput = (e) => {
        setSearchInput(e.target.value)
    }
    
    return (
        <div className='search'>
            <div className="search__back" onClick={handleBack}>
                <img src={backIcon} alt="back icon" />
            </div>
            <input onChange={handleSearchInput} value={searchInput} type="text" className='search__input' placeholder='Поиск...' />
            <div className="search__close" onClick={handleClose}>
                <img src={closeIcon} alt="close icon" />
            </div>
        </div>
    )
}

export default ToDoSearchPanel