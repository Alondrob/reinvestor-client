import React from 'react';
import { Link } from 'react-router-dom';
import SideBarIcon from './SideBarIcon';
import {OfficeBuildingIcon, SearchIcon, LibraryIcon, BookOpenIcon, CashIcon, UploadIcon, CalculatorIcon, NewspaperIcon} from '@heroicons/react/outline';
import Metrics from '../metrics/Metrics';



const SideBar = () => {

    const test = () => {
        console.log("hello")
    }

    return (

        <div className='sideBar'>

            <Link to='/my-properties'> 
                <SideBarIcon name="My Properties" Icon={OfficeBuildingIcon} />
            </Link>

            <Link to='/funding'>
                <SideBarIcon name="Funding" Icon={CashIcon} />
            </Link>

            <Link to="/my-reports">
                <SideBarIcon name="My Reports" Icon={BookOpenIcon} />
            </Link>

            <Link to='/search-properties'>
                <SideBarIcon name="Search Properties" Icon={SearchIcon} />
            </Link>

           <Link to="/metrics">
                <SideBarIcon onClick={test} name="Metrics" Icon={CalculatorIcon} />
           </Link>

           <Link to='/blogs'>
                <SideBarIcon name="Discussions" Icon={NewspaperIcon} />
           </Link>
           
          
        </div>







    )


}

export default SideBar;