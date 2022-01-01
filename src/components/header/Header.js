import classes from './Header.css';
import Login from '../login/Login'

import React, { useEffect, useState } from 'react'
import userEvent from '@testing-library/user-event';

export default function Header() {

    const user = {
        name: 'bruh',
        type: 'GUEST',
    }

    const openLoginForm = () => {

        console.log("logging in...");

        return (
            <Login />
        )
    };


    const [isLoginForm, setLoginForm] = useState(false)

    const openLoginFormHandler = () => {
        setLoginForm(true);
    }

    const logoutHandler = () => {
        console.log('logging off...');
    }

    return (
        <React.Fragment>
            {isLoginForm && openLoginForm()}

            <div className='header'>

                <div id='logo'>Logo</div>

                <div className='menu'>home</div>



                <div id='login'>
                    Welcome, {<br />}{user.type == 'GUEST' ? 'guest' : user.name}.
                    <br /><br />
                    <button
                        onClick={user.type == 'GUEST' ? openLoginFormHandler : logoutHandler}>
                        {user.type == 'GUEST' ? 'Log-in' : 'Log-out'}
                    </button>
                </div>

            </div>

        </React.Fragment>
    )
}