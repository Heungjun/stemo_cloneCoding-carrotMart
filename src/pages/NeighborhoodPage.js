import React from "react";
import MobileAppBar from "../component/MobileAppBar";
import SearchIcon from "../component/icons/SearchIcon";
import InterestMenuIcon from "../component/icons/InterestMenuIcon";
import NotificationIcon from "../component/icons/NotificationIcon";
import NeighborhoodListItem from "../component/NeighborhoodListItem";
import WriteFloatingButton from "../component/WriteFloatingButton";

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

  const interestMenuView = () =>
    interestMenus.map((row) => (
      <li key={row} className="interest-menu__item">
        {row}
      </li>
    ));

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

      <section className="interest-menu__wrap">
        <ul className="interest-menu__list">{interestMenuView()}</ul>
      </section>

      <ul className="neighborhood__list">
        <NeighborhoodListItem
          key={1}
          data={{
            writeType: "동네질문",
            content:
              "Q.안녕하세요 혹시 모라중학교 근처에 프린트랑 스캔복사 같은거 할 수 있는 곳이 있을까요? 어머님이 양도 작고 급한건 동사무소(행정센터?)에서 된다구 하고 해보셨다고 하셔서 다녀왔는데 안되기도 하고 안되기만 했으면 그만인데 무슨 안좋은 일이라도 있으셨는지 젊은 사람이 부탁해서 그런건지 엄청 불친절하게 상대하셔서 기분만 상하고 돌아왔네요.\n구남역이나 모라중학교나 신모라사거리?에 프린트하고 스캔 가능 한 곳 알려주시면 너무너무 감사하겠습니다.",
            nickName: "욱정",
            area: "사상구 모라동",
            time: "15분 전",
            wonder: 0,
            answer: 0,
          }}
        />
        <NeighborhoodListItem
          key={2}
          data={{
            writeType: "해주세요",
            content: "스냅스에서 물건 구매하면 집 앞까지 오나요??",
            nickName: "sagarayo",
            area: "사상구 주례제2동",
            time: "33분 전",
            wonder: 0,
            answer: 5,
          }}
        />
        <NeighborhoodListItem
          key={3}
          data={{
            writeType: "동네질문",
            content: "Q.포켓몬 빵 거래하면서 비틀즈 사주셨던분..ㅊㅐ팅주세요",
            nickName: "초코하임",
            area: "사상구 모라동",
            time: "2시간 전",
            wonder: 3,
            answer: 6,
          }}
        />
        <NeighborhoodListItem
          key={4}
          data={{
            writeType: "동네질문",
            content:
              "Q.제가 프리랜서라 늦게도 일을 하는 편인데 사상에 24시간 카페가\n있을까요?? 아니면 늦게까지 오픈하는 곳이 있는지도 궁금합니다!",
            nickName: "B군",
            area: "괘법동",
            time: "2시간 전",
            wonder: 1,
            answer: 2,
          }}
        />

        <NeighborhoodListItem
          key={5}
          data={{
            writeType: "취미생활",
            content:
              "이번 일요일 장흥 제암산 우리나라쬐고 진달래명소 가실분계실까요\n25인승 봉고차로갑니다. 현재8명입니다",
            nickName: "수니",
            area: "사상구 모라동",
            time: "5시간 전",
            wonder: 0,
            answer: 0,
          }}
        />
      </ul>
      <WriteFloatingButton />
    </>
  );
};

export default NeighborhoodPage;
