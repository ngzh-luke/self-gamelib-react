import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Footer from "./components/footer.tsx";
import ToTopBTN from "./components/toTopBTN.tsx";
import { AppNavigator } from "./AppNavigator.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppNavigator></AppNavigator>
    <Footer></Footer>
    <ToTopBTN></ToTopBTN>
  </React.StrictMode>
);

document.getElementsByTagName("title").item(0)!.innerHTML =
  "GameLib by LukeCreated";
