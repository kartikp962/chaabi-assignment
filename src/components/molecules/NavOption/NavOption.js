import React from 'react'
import './NavOption.css'

const NavOption = ({ icon, text, active }) => {
    return (
        <div className={`flex-align gap-18 NavOption ${active && 'active'}`}>
            {icon}
            <span>{text}</span>
        </div>
    )
}

export default NavOption