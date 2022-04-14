import React from "react";

const MobileHomeListItem = ({
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
}) => {
  return (
    <li className="mobile-home-list-item">
      <img className="mobile-home-list-item__image" src={imagePath} />
      <div className="mobile-home-list-item__description">
        <div className="mobile-home-list-item__title">{title}</div>
        <div className="mobile-home-list-item__address">{address}</div>
        <div className="mobile-home-list-item__price">
          {price ? price.toLocaleString("ko-KR") + "원" : "나눔"}
        </div>
      </div>
    </li>
  );
};

export default MobileHomeListItem;
