import React from "react";

import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed";


const Home = () => {
  return (
    <div className="">
         {/* Sidebar */}
         <Sidebar />

         {/* Feed */}
         <Feed />           
    </div>
  );
};

export default Home;