import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/header/Header';
import SideBar from './components/sideBar/SideBar';
import Feed from "./components/feed/Feed";
import SelectedProperty from './components/properties/SelectedProperty';
import Blogs from './components/blogs/Blogs'
import Funding from './components/properties/Funding';
import Calculator from './components/metrics/Calculator'
import Reports from './components/users/Reports';
import SavedProperties from './components/users/SavedProperties';
import Metrics from "./components/metrics/Metrics";
import myProperties from './components/properties/myProperties';
import Main from "./components/feed/Main";
import SignUp from "./components/users/SignUp";
import Login from "./components/users/Login";
import Logout from "./components/users/Logout";



const App = () => {

  return (
    <div>

      <Router>
        <Header />
       {/* <Profile/> */}
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/metrics" element={<Metrics/>}></Route>
          <Route path="/my-properties" element={<myProperties/>}></Route>
          <Route path="metrics/reports/:id" element={<Reports/>} ></Route>
          <Route path="/sign-up" element={<SignUp/>} ></Route>
          <Route path="/login" element={<Login/>} ></Route>
          <Route path="/log-out" element={<Logout/>} ></Route>
          {/* 
          <Route path="/search-properties" element={<PropertySearch />} />
          <Route path="selected-property/:id" element={<SelectedProperty />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/repots" element={<Reports />} />
          <Route path="/saved-properties" element={<SavedProperties />} />
          <Route path="/calculator" element={<Calculator />} /> */}
        </Routes>
      </Router>



    </div>
  )
}


export default App;
