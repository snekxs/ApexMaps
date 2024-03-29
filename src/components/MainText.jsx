import Data from "./Data.jsx";
import React from "react";

export default function MainText() {
  const data = Data();
  const map = data ? data["battle_royale"]["current"]["map"] : "Loading...";


  switch (map) {
    case "World's Edge":
      document.body.style.backgroundImage =
        "url('https://wallpapercave.com/wp/wp9684365.png')";
      break;
    case "Broken Moon":
      document.body.style.backgroundImage =
        "url('https://cdn1.dotesports.com/wp-content/uploads/2022/10/20144307/Apex-Legends-Broken-Moon-Powerizer-2048x1152.jpeg')";
      break;
			case "Kings Canyon":
			document.body.style.backgroundImage =
				"url('https://wallpapercave.com/wp/wp4413079.jpg')";
			break;
			case "Olympus":
			document.body.style.backgroundImage = 
				"url('https://wallpapercave.com/wp/wp11307899.jpg')";
			break;
			case "Storm Point":
			document.body.style.backgroundImage =
				"url('https://wallpapercave.com/wp/wp11307877.jpg' )";
			break;
	}

	return  <div id={"currentMap"}>Current Map: {data ? data["battle_royale"]["current"]["map"] : "Loading..."}</div>
}
