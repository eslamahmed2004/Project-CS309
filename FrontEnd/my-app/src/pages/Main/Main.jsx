import React from "react";
import Navbar from "./Navbar"; 
import Search from "./Search";
import Body from "./Body";
import Application from "./Application";
import Locations from "./Locations" ;
import Footer from "./Footer";

export const Main = () => {
  return (
    <div>
      <Navbar /> 
      <Search/>
      <Body/>
      <Application/>
      <Locations/>
      </div>
  );
};

export default Main;
