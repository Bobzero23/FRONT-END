import React from "react";
import SideBar from "../page/sidebar/SideBar";

const Home = () => {
  return (
    <div className="lg:flex px-5 lg:px-20 pt-[2.9vh]">
      <div className="hidden lg:block w-[25vw] relative">
        <SideBar />
      </div>
      <div className="right-side-part"></div>
    </div>
  );
};

export default Home;
