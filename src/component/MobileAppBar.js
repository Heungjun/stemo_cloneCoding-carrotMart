import React from "react";
import icons_menu from "../asset/icons/icons_menu.png";
import icons_notification from "../asset/icons/icons_notification.png";
import icons_search from "../asset/icons/icons_search.png";

const MobileAppBar = () => {
  return (
    <header className="mobile-Appbar">
      <div className="mobile-Appbar__leading">
        <div style={{ fontSize: "22px", fontWeight: "bold" }}>괘법동</div>
      </div>
      <div className="mobile-Appbar__actions">
        <img className="icon" src={icons_search} />
        <img className="icon" src={icons_menu} />
        <img className="icon" src={icons_notification} />
      </div>
    </header>
  );
};

export default MobileAppBar;
