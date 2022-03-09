import React from 'react';
import { useNavigate } from 'react-router-dom';
import {HomeIcon} from '@heroicons/react/solid'


function HomePage() {
    let navigate = useNavigate();

    const handleRoute = () => {
        let path = "/";
        navigate(path)
    }

    return (
        <div className="flex space-x-2 align-middle text-white" onClick={handleRoute}>
            <HomeIcon className="h-10 w-10"/>

            <h2 className="h-2 text-center">ReInvestor</h2>
        </div>
    )
}

export default HomePage;
