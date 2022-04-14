import React from "react";
import MobileHomeListItem from "./MobileHomeListItem";

const MobileHomeList = ({ datas }) => {
  return (
    <ul className="mobile-home-list">
      {datas?.map((data) => (
        <MobileHomeListItem
          src={data.imagePath}
          title={data.id}
          address={data.address}
          price={data.price}
        />
      ))}
    </ul>
  );
};

export default MobileHomeList;
