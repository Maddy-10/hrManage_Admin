import React from "react";
import Header from "../Components/Header";
import Userlist from "../Components/Userlist";
import Edit from "../Components/Edit";
import Adduser from "../Components/Adduser";
import Info from "../Components/Info";
import Leave from "../Components/Leave";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="">
          <div className="row">
            <div className="col-3 col-lg-2  min-vh-100">
              <Header />
            </div>
            <div className="col-9 col-lg-10">
              <Userlist />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
