import React from "react";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import Login from "./components/Login";
import Home from "./components/Home";
import AddNewPlan from "./components/AddNewPlan";
import ViewPlan from "./components/ViewPlan";




const App = () => {

return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/addnewplan" element={<AddNewPlan/>}/>
          <Route exact path="/viewplan" element={<ViewPlan/>}/>
        </Routes>
    </div>
  );
};

export default App;
