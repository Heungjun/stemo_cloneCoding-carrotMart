import React from "react";
import icons_answer from "../asset/icons/icons_answer.png";
import icons_heart from "../asset/icons/icons_heart.png";

const MobileHomeListItem = ({
  data: {
    /**
     *  Type: String
     *  required
     *  Description: Image Path
     */
    imagePath,

    /**
     *  Type: String
     *  required
     *  Description: title
     */
    title,

    /**
     *  Type: String
     *  required
     *  Description: address
     */
    address,

    /**
     *  Type: Number
     *  required
     *  Description: price
     */
    price,

    /**
     *  Type: Number
     *  Default: 0
     *  Description: ["판매중", "예약중", "판매완료"]
     */
    status = 0,

    chat,
    like,
  },
}) => {
  const statusView = (status) => {
    switch (status) {
      case 1:
        return (
          <div className="mobile-home-list-item__status mobile-home-list-item__status--stay">
            예약중
          </div>
        );
      case 2:
        return (
          <div className="mobile-home-list-item__status mobile-home-list-item__status--done">
            판매완료
          </div>
        );
      default:
        return;
    }
  };

  const smallIconView = (icon, number) => {
    return (
      <>
        <img className="small-icon ml5p" src={icon} />
        <span>{number}</span>
      </>
    );
  };

  return (
    <li className="mobile-home-list-item">
      <img className="mobile-home-list-item__image" src={imagePath} />
      <div className="mobile-home-list-item__description">
        <div className="mobile-home-list-item__title">{title}</div>
        <div className="mobile-home-list-item__address">{address}</div>
        <div className="mobile-home-list-item__l3">
          {statusView(status)}
          <div className="mobile-home-list-item__price">
            {price ? price.toLocaleString("ko-KR") + "원" : "나눔"}
          </div>
        </div>
        <div className="mobile-home-list-item__detail">
          {!!chat && smallIconView(icons_answer, chat)}
          {!!like && smallIconView(icons_heart, like)}
        </div>
      </div>
    </li>
  );
};

export default MobileHomeListItem;
