import React from 'react'

import './Button.scss'

const Button = ({ children, onClick, showModal }) => {
    return (
        <button onClick={onClick} className={showModal ? 'remove' : 'button'}>
            {children}
        </button>
    )
}

export default Button