import React from "react";
import "./App.css";
import Data from "./components/Data.jsx";

function App() {
	const data = Data();

  return (
    <div className="App">
      <div className="elements">
			<h1 className="time">Time Remaining: {data ? data["current"]["remainingTimer"] : "Loading..."}</h1>
        <h1 className="currentMap">
					Current Map: {data ? data["current"]["map"] : "Loading..."}
		</h1>
		<h1 className="nextMap">
				Next Map: {data ? data["next"]["map"] : "Loading..."}
		</h1>
		
      </div>
    </div>
  );
}

export default App;


