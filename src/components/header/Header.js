import './Header.css';

import React from 'react'
import userEvent from '@testing-library/user-event';

export default function Header() {

    const user = {
        name: 'bruh',
        type: 'CUSTOMER',
    }


    return (
        <div className='header'>
            
        <div id='logo'>Logo</div>
        <div className='menu'>home</div>

        <div id='login'>
            Welcome, {<br/>}{user.type=='GUEST' ? 'guest' : user.name}.
            <br/><br/>
            <button> {user.type=='GUEST' ? 'Log-in' : 'Log-out'}</button>
        </div>

        </div>
    )
}