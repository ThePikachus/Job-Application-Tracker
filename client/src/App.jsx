import React from "react";
import MainContainer from "./containers/MainContainer.jsx";
import Taskbar from "./components/Taskbar.jsx";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import "../styles.scss";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div id="AppContainer">
        <Taskbar />
        <MainContainer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
