import "./common.css";
import MobileAppBar from "./component/MobileAppBar";
import MobileHomeList from "./component/MobileHomeList";
import "./component/MobileNavigation";
import MobileNavigation from "./component/MobileNavigation";
import testDatas from "./data/HomeListData";

import icons_menu from "./asset/icons/icons_menu.png";
import icons_notification from "./asset/icons/icons_notification.png";
import icons_search from "./asset/icons/icons_search.png";

function App() {
  return (
    <div className="App">
      <MobileAppBar leading={
        <div style={{ fontSize: "22px", fontWeight: "bold" }}>괘법동</div>}
         actions={[
        <img className="icon" src={icons_search} />,
        <img className="icon" src={icons_menu} />,
        <img className="icon" src={icons_notification} />]} />
      <section>
        <MobileHomeList datas={testDatas} />
      </section>
      <MobileNavigation />
    </div>
  );
}

export default App;
