import React, { useState } from "react";

import AppTheme from "./Context/Apptheme";
import Dice from "./Dice";

import "./App.css";

function App() {
  const themeHook = useState("green");
  return (
    <AppTheme.Provider value={themeHook}>
      <Dice></Dice>
    </AppTheme.Provider>
  );
}

export default App;
