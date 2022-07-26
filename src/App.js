import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Navbar from "./components/Layout/Navbar";
import NotFound from "./components/Pages/NotFound";
import AddUser from "./components/Users/AddUser";
import EditUser from "./components/Users/EditUser";
import User from "./components/Users/User";
import UpdateUser from "./components/Users/UpdateUser";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/users/add' element={<AddUser/>}/>
          <Route exact path='/users/edit/:id' element={<EditUser/>} />
          <Route exact path='/users/update/:id' element={<UpdateUser/>} />
          <Route exact path='/users/:id' element={<User/>} />
          <Route path="/:id" element={<NotFound/>} />
            
        </Routes>
      </div>
    </Router>
  );
}

export default App;
