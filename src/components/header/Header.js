import React from 'react'
import HomePage from './HomePage'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import Login from './Login'
import SignUp from './SignUp'
import Logout from './Logout'

const Header = () => {
    return (
        <div className="sticky top-0 z-50 bg-slate-800 flex items-center p-2 lg:px-5 shadow-md space-x-5">
            <HomePage />
            <SearchBar />
            <Login/>
            
            <div className="text-gray-100 font-bold from-neutral-100">
                <Link to='/sign-up' >
                    SignUp
                </Link>
            </div>
           
         
            <Logout/>
        </div>
    )
}

export default Header