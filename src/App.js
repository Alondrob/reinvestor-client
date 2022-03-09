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
import Calculator from './components/properties/Calculator';
import Reports from './components/users/Reports';
import SavedProperties from './components/users/SavedProperties';
import Main from "./components/feed/Main";


const App = () => {

  return (
    <div>

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          
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
