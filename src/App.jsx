// import reactLogo from "./assets/react.svg";

import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header.jsx";

function App() {
  return (
    <>
      <div>
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default App;
