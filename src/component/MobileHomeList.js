import React from "react";
import MobileHomeListItem from "./MobileHomeListItem";

const MobileHomeList = ({ datas }) => {
  console.log(datas)
  return (
    <ul className="mobile-home-list">
      {datas?.map((data) => (
        <MobileHomeListItem
          key={data.id}
          imagePath={data.imagePath}
          title={data.title}
          address={data.address}
          price={data.price}
        />
      ))}
    </ul>
  );
};

export default MobileHomeList;
