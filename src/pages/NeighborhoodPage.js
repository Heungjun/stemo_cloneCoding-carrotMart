import React from "react";
import MobileAppBar from "../component/MobileAppBar";
import MobileHomeList from "../component/MobileHomeList";
import SearchIcon from "../component/icons/SearchIcon";
import InterestMenuIcon from "../component/icons/InterestMenuIcon";
import NotificationIcon from "../component/icons/NotificationIcon";

const NeighborhoodPage = () => {
  const interestMenus = [
    "동네질문",
    "동네맛집",
    "동네소식",
    "취미생활",
    "분실/실종센터",
    "동네사건사고",
    "해주세요",
    "일상",
    "고양이",
    "강아지",
    "건강",
    "살림",
    "동네사진전",
    "인테리어",
    "교육/학원",
    "출산/육아",
    "기타",
  ];

  return (
    <>
      <MobileAppBar
        leading={
          <div style={{ fontSize: "22px", fontWeight: "bold" }}>괘법동</div>
        }
        actions={[
          <SearchIcon key="searchIcon" />,
          <InterestMenuIcon key="interestMenuIcon" />,
          <NotificationIcon key="notificationIcon" />,
        ]}
      />
      <section style={{ overflowX: "scroll" }}>
        <ul
          style={{
            width: "max-content",
            backgroundColor: "#dde0ee66",
            padding: "12px 16px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            overflowX: "hidden",
            overflowY: "hidden",
            flexWrap: "nowrap",
          }}
        >
          {interestMenus.map((row) => (
            <li
              key={row}
              style={{
                flex: "0 0 auto",
                height: "min-content",
                backgroundColor: "white",
                border: "solid 1px gray",
                borderRadius: "5px",
                padding: "10px 15px",
                textAlign: "center",
                fontSize: "13px",
                fontWeight: "bold",
              }}
            >
              {row}
            </li>
          ))}
        </ul>
      </section>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          backgroundColor: "#dde0ee66",
        }}
      >
        <li style={{ backgroundColor: "white" }}>
          <div>동네질문</div>

          <h1>Q.포켓몬 빵 거래하면서 비틀즈 사주셨던분..ㅊㅐ팅주세요</h1>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>초코하임*사상구 모라동</div>
            <div>2시간 전</div>
          </div>
          <div style={{ display: "flex" }}>
            <div>궁금해요 3</div>
            <div>답변 6</div>
          </div>
        </li>

        <li style={{ backgroundColor: "white" }}>
          <div>동네질문</div>

          <h1>
            Q.제가 프리랜서라 늦게도 일을 하는 편인데 사상에 24시간 카페가
            있을까요?? 아니면 늦게까지 오픈하는 곳이 있는지도 궁금합니다!
          </h1>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>B군*괘법동</div>
            <div>2시간 전</div>
          </div>
          <div style={{ display: "flex" }}>
            <div>궁금해요 1</div>
            <div>답변 2</div>
          </div>
        </li>

        <li style={{ backgroundColor: "white" }}>
          <div>취미생활</div>

          <h1>
            이번 일요일 장흥 제암산 우리나라쬐고 진달래명소 가실분계실까요
            25인승 봉고차로갑니다. 현재8명입니다
          </h1>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>수니*사상구 모라동</div>
            <div>5시간 전</div>
          </div>
          <div style={{ display: "flex" }}>
            <div>공감하기</div>
            <div>댓글쓰기</div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default NeighborhoodPage;
