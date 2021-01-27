import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom'


const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium','btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) =>{

    // if buttonStyle true then use buttonStyle unless use the first in STYLES Array
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    // you can pass some thing tho childern then it become children example <button> Getting Start </button> 📌
    return(
        <Link to='/sign-up' className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    );

};