import React from "react";
import { Link} from 'react-router-dom';
import {HeaderWrap} from '../assests/styled-components'

const Header = () => {
    return (
        <HeaderWrap>
            <header>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/resume'>Resume</Link>
                    <Link to='/contact'>Contact</Link>
                </nav>
            </header>
        </HeaderWrap>
    )
}

export default Header