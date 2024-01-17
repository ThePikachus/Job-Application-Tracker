import React from "react";
import MainContainer from "./containers/MainContainer.jsx";
import Taskbar from "./components/Taskbar.jsx";
import "../styles.scss";

function App() {
  return (
    <div id="AppContainer">
      <Taskbar />
      <MainContainer />
    </div>
  );
}

export default App;
