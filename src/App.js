import { useState } from "react";
import "./common.css";
import "./component/MobileNavigation";
import MobileNavigation from "./component/MobileNavigation";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";

function App() {
  const tabView = (index) => {
    switch (index) {
      case 3: return <ChatPage />;
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
