import React from 'react'
import './Logo.css'

import { ReactComponent as LogoText } from '../../../assets/svg/Logo_Text.svg'
const Logo = () => {
    return (
        <div className='Logo'>
            <LogoText />
        </div>
    )
}

export default Logo