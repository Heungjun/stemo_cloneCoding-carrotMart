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
        actions={[
          <SearchIcon key="searchIcon" />,
          <MenuIcon key="menuIcon" />,
          <NotificationIcon key="notificationIcon" />,
        ]}
      />
      <MobileHomeList datas={testDatas} />
    </>
  );
};

export default HomePage;
