import React from "react";
import './Home.css'

import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed";
import Widget from "./Widget/Widget";


const Home = () => {
  return (
    <div className="home">
         {/* Sidebar */}
         <Sidebar />

         {/* Feed */}
         <Feed /> 

         {/* Widget */}
         <Widget />           
    </div>
  );
};

export default Home;