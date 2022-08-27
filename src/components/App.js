import React, { useReducer, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Users from "./Users";
import Search from "./Search";
import Alert from "./Alert";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import UserDetails from "./UserDetails";
import GithubState from "../context/github/github-state";
import AlertState from "../context/alert/alert-state";
import NotFound from "./NotFound";
import Home from "./Home";

const App = () => {
  return (
    <GithubState>
        <AlertState>
      <BrowserRouter>
        <Navbar />
      
          <Alert />
          <Routes>
            <Route
              index
              path="/"
              element={<Home />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/user/:login" element={<UserDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
       
      </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};

export default App;
