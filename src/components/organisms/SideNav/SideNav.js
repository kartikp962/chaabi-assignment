import React from 'react'
import Logo from '../../atoms/logo/Logo'
import NavOption from '../../molecules/NavOption/NavOption'
import { NavOptions } from '../../../assets/data'
import './SideNav.css'

const SideNav = () => {
    return (
        <div className='SideNav'>
            <div className='flex-center nav-logo'>
                <Logo />
            </div>
            <div className='nav-options'>
                {NavOptions.map(option => <NavOption {...option} />)}
            </div>
        </div>
    )
}

export default SideNav;