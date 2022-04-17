import React from "react";
import MobileAppBar from "../component/MobileAppBar";
import MobileHomeList from "../component/MobileHomeList";
import MenuIcon from "../component/icons/MenuIcon";
import SearchIcon from "../component/icons/SearchIcon";
import NotificationIcon from "../component/icons/NotificationIcon";

import testDatas from "../data/HomeListData";

const HomePage = () => {
  return (
    <>
      <MobileAppBar
        leading={
          <div style={{ fontSize: "22px", fontWeight: "bold" }}>괘법동</div>
        }
        actions={[<SearchIcon />, <MenuIcon />, <NotificationIcon />]}
      />
      <section>
        <MobileHomeList datas={testDatas} />
      </section>
    </>
  );
};

export default HomePage;
