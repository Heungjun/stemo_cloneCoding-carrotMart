import React, { useState } from "react";
import around_off from "../asset/icons/icons_around_off.png";
import around_on from "../asset/icons/icons_around_on.png";
import chat_off from "../asset/icons/icons_communication_off.png";
import chat_on from "../asset/icons/icons_communication_on.png";
import home_off from "../asset/icons/icons_home_off.png";
import home_on from "../asset/icons/icons_home_on.png";
import organization_off from "../asset/icons/icons_organization_off.png";
import organization_on from "../asset/icons/icons_organization_on.png";
import user_off from "../asset/icons/icons_user_off.png";
import user_on from "../asset/icons/icons_user_on.png";

const MobileNavigation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const onItemClick = (index) => setCurrentIndex(index);

  return (
    <nav className="mobile-navigation">
      <ul className="mobile-navigation__navigator">
        <li className="mobile-navigation__item" onClick={() => onItemClick(0)}>
          <img
            className="mobile-navigation__item-icon"
            src={currentIndex === 0 ? home_on : home_off}
          />
          홈
        </li>
        <li className="mobile-navigation__item" onClick={() => onItemClick(1)}>
          <img
            className="mobile-navigation__item-icon"
            src={currentIndex === 1 ? organization_on : organization_off}
          />
          동네생활
        </li>
        <li className="mobile-navigation__item" onClick={() => onItemClick(2)}>
          <img
            className="mobile-navigation__item-icon"
            src={currentIndex === 2 ? around_on : around_off}
          />
          내 근처
        </li>
        <li className="mobile-navigation__item" onClick={() => onItemClick(3)}>
          <img
            className="mobile-navigation__item-icon"
            src={currentIndex === 3 ? chat_on : chat_off}
          />
          채팅
        </li>
        <li className="mobile-navigation__item" onClick={() => onItemClick(4)}>
          <img
            className="mobile-navigation__item-icon"
            src={currentIndex === 4 ? user_on : user_off}
          />
          나의 당근
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavigation;
