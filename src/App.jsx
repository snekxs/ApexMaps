
import "./App.css";
import Data from "./components/Data.jsx";
import {Button} from "@mui/material";
import MainText from "./components/MainText.jsx";
import * as React from 'react'
import {useState} from "react";

function App() {
	const [textState, setTextState] = useState("Ranked Maps");

	const data = Data();

	const toggleText = () => {
		setTextState((state) => (state === "Public Maps" ? "Ranked Maps" : "Public Maps"));
	};

	const ranked = () =>{
		const map = document.getElementById("currentMap").innerText=`Current Ranked Map: ${data["ranked"]["current"]["map"]}`
		const nextmap = document.getElementById("nextmap").innerText=`Next Ranked Map: ${data["ranked"]["next"]["map"]}`
		const timer =  document.getElementById("timer").innerText=`Ranked Time Remaining: ${data["ranked"]["current"]["remainingTimer"]}`
		toggleText()
	}





  return (
    <div className="App">
      <div className="elements">
			<div id={"timer"} className="time">Time Remaining: {data ? data["battle_royale"]["current"]["remainingTimer"] : "Loading..."}</div>
        <h1 className="currentMap">
					<MainText />
		</h1>
		<h1 className="nextMap">
			<div id={"nextmap"}>Next Map: {data ? data["battle_royale"]["next"]["map"] : "Loading..."}</div>
		</h1><Button id={"button"} onClick={ranked} color="inherit">{textState}</Button>
		
      </div>

    </div>
  );
}

export default App;


