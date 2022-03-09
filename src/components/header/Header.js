import React from 'react'
import HomePage from './HomePage'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import Login from './Login'
import SignIn from './SignIn'
import Logout from './Logout'

const Header = () => {
    return (
        <div className="sticky top-0 z-50 bg-slate-800 flex items-center p-2 lg:px-5 shadow-md space-x-5">
            <HomePage />
            <SearchBar />
            <Login/>
            <SignIn/>
            <Logout/>
        </div>
    )
}

export default Header