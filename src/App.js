import "./common.css";
import MobileAppBar from "./component/MobileAppBar";
import MobileHomeList from "./component/MobileHomeList";
import "./component/MobileNavigation";
import MobileNavigation from "./component/MobileNavigation";
import testDatas from "./data/HomeListData";

import SearchIcon from "./component/icons/SearchIcon";
import MenuIcon from "./component/icons/MenuIcon";
import NotificationIcon from "./component/icons/NotificationIcon";

function App() {
  return (
    <div className="App">
      <MobileAppBar
        leading={
          <div style={{ fontSize: "22px", fontWeight: "bold" }}>괘법동</div>
        }
        actions={[<SearchIcon />, <MenuIcon />, <NotificationIcon />]}
      />
      <section>
        <MobileHomeList datas={testDatas} />
      </section>
      <MobileNavigation />
    </div>
  );
}

export default App;
