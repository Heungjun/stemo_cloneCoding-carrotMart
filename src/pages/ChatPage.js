import React from "react";
import ScanIcon from "../component/icons/ScanIcon";
import NotificationIcon from "../component/icons/NotificationIcon";
import MobileAppBar from "../component/MobileAppBar";


const ChatPage = () => {
  return (
    <>
      <MobileAppBar
        leading={
          <div style={{ fontSize: "22px", fontWeight: "bold" }}>채팅</div>
        }
        actions={[
            <ScanIcon />,
          <NotificationIcon key="notificationIcon" />,
        ]}
      />
      <ul>
          <li>
              <div>이미지</div>
              <div>당근이</div>
              <div>1주전</div>
              <div>악당님의 첫 댓글을 기다렸어요! 괘법동 근처 이웃들의 질문들이 악당님의 답변을 기다리고 있어요!:)</div>
          </li>
      </ul>
    </>
  );
};

export default ChatPage;
