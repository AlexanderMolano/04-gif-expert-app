import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";
import { GifExpertApp } from "./GifExpertApp";
//import GiftExpert from "./GiftExpert";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GifExpertApp />
    {/* {<GiftExpert />} */}
  </React.StrictMode>
);
