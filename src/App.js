import "./common.css";
import MobileAppBar from "./component/MobileAppBar";
import MobileHomeList from "./component/MobileHomeList";
import "./component/MobileNavigation";
import MobileNavigation from "./component/MobileNavigation";
import testDatas from "./data/HomeListData";

function App() {
  return (
    <div className="App">
      <MobileAppBar />
      <section>
        <MobileHomeList datas={testDatas} />
      </section>
      <MobileNavigation />
    </div>
  );
}

export default App;
