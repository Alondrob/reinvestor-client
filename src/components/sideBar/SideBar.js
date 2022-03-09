import React from 'react';
import { Link } from 'react-router-dom';
import SideBarIcon from './SideBarIcon';
import {OfficeBuildingIcon, SearchIcon, LibraryIcon, BookOpenIcon, CashIcon, UploadIcon, CalculatorIcon, NewspaperIcon} from '@heroicons/react/outline';



const SideBar = () => {

    return (

        <div className='sideBar'>
           <SideBarIcon name="My Properties" Icon={OfficeBuildingIcon}/>
           <SideBarIcon name="My Reports" Icon={BookOpenIcon}/>
           <SideBarIcon name="Search Properties" Icon={SearchIcon}/>
           <SideBarIcon name="Funding" Icon={CashIcon}/>
           <SideBarIcon name="Metrics" Icon={CalculatorIcon}/>
           <SideBarIcon name="Discussions" Icon={NewspaperIcon}/>
        </div>







    )


}

export default SideBar;