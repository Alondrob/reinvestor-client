import React from "react";
import HomePage from "./HomePage";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import Login from "../users/Login";
import SignUp from "../users/SignUp";
import Logout from "../users/Logout";
import { useDispatch, useSelector } from "react-redux";
import { userLoggout } from "../../redux/actions/userActions";

const Header = () => {
    const userState = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  

    const handleLoggout = async () => {
        console.log('handle logout')
        dispatch(userLoggout()).then(() => {
        navigate('/')
        })
        
    }
  return (
    <div className="sticky top-0 z-50 bg-slate-800 flex items-center p-2 lg:px-5 shadow-md space-x-5">
      <HomePage />

    {userState.loggedIn &&
       <SearchBar />
    }
     

      {!userState.loggedIn && (
        <>
          <div className="text-gray-100 font-bold from-neutral-100">
            <Link to="/login">Login</Link>
          </div>
          <div className="text-gray-100 font-bold from-neutral-100">
            <Link to="/sign-up">SignUp</Link>
          </div>
        </>
      )}

      {userState.loggedIn && (
        <div className="text-gray-100 font-bold from-neutral-100">
                  <button
                      className="text-gray-100 font-bold from-neutral-100"
                        onClick={handleLoggout}
                  >
                      
                      Logout</button>
        </div>
      )}
    </div>
  );
};

export default Header;
