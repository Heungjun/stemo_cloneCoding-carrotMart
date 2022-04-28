import { useState } from "react";
import "./common.css";
import "./component/MobileNavigation";
import MobileNavigation from "./component/MobileNavigation";
import HomePage from "./pages/HomePage";
import NeighborhoodPage from "./pages/NeighborhoodPage";

function App() {
  const tabView = (index) => {
    switch (index) {
      case 1:
        return <NeighborhoodPage />;
      case 0:
      default:
        return <HomePage />;
    }
  };

  const [index, setIndex] = useState(0);

  return (
    <div className="App">
      {tabView(index)}
      <MobileNavigation currentIndex={index} onClick={setIndex} />
    </div>
  );
}

export default App;
