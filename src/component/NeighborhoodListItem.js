import React from "react";
import icon1 from "../asset/icons/icons_check.png";
import icon2 from "../asset/icons/icons_answer.png";

const NeighborhoodListItem = ({ data }) => {
  return (
    <li className="neighborhood__item">
      <div className="neighborhood__item-top">
        <div className="neighborhood__item-type">{data.writeType}</div>

        <h1 className="neighborhood__item-content">{data.content}</h1>

        <div className="neighborhood__item-info">
          <div>
            {data.nickName} * {data.area}
          </div>
          <div>{data.time}</div>
        </div>
      </div>
      <div className="neighborhood__item-bottom">
        <div>
          <img src={icon1} />
          궁금해요 {data.wonder}
        </div>
        <div>
          <img src={icon2} style={{ width: "18px", height: "18px" }} />
          답변 {data.answer}
        </div>
      </div>
    </li>
  );
};

export default NeighborhoodListItem;
