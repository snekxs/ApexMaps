import Data from "./Data.jsx";
import React from "react";

export default function MainText() {
  const data = Data();
  const map = data ? data["current"]["map"] : "Loading...";

  switch (map) {
    case "World's Edge":
      document.body.style.backgroundImage =
        "url('https://wallpapercave.com/wp/wp9684365.png')";
      break;
    case "Broken Moon":
      document.body.style.backgroundImage =
        "url('https://cdn1.dotesports.com/wp-content/uploads/2022/10/20144307/Apex-Legends-Broken-Moon-Powerizer-2048x1152.jpeg')";
      break;
  }

  return <div>Current Map: {data ? data["current"]["map"] : "Loading..."}</div>;
}
