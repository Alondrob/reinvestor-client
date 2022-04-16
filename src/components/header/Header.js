import React from 'react'
import HomePage from './HomePage'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import Login from '../users/Login'
import SignUp from '../users/SignUp'
import Logout from '../users/Logout'

const Header = () => {

    const handleFetch = async () => {
        const response = await fetch(
            'http://localhost:3000/users',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        user_name: 'ad123',
                        email: 'alondrob@gmail.com',
                        password: '123',
                        password_confirmation: '123'
                    }
                ),
            }
        );
                console.log("response", response)
                let data = await response.json();
                console.log('data', data);
    }
    return (
        <div className="sticky top-0 z-50 bg-slate-800 flex items-center p-2 lg:px-5 shadow-md space-x-5">
            <HomePage />
            <SearchBar />
         
            
            <div className="text-gray-100 font-bold from-neutral-100">
                <Link to='/login' >
                    Login
                </Link>
            </div>

            <div className="text-gray-100 font-bold from-neutral-100">
                <Link to='/sign-up' >
                    SignUp
                </Link>
            </div>

            <div className="text-gray-100 font-bold from-neutral-100">
                <Link to='/log-out' >
                    Logout
                </Link>
            </div>
            {/* <div className="text-gray-100 font-bold from-neutral-100">
                <button onClick={handleFetch}>
                    Test
                </button>
            </div>
             */}
           
        </div>
    )
}

export default Header