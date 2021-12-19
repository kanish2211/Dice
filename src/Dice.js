import React, { useState } from "react";
import logo from "./assests/Logo.png";
import six from "./assests/six.png";
import five from "./assests/five.png";
import four from "./assests/four.png";
import three from "./assests/three.png";
import two from "./assests/two.png";
import one from "./assests/one.png";

import "./App.css";
import Button from "./components/Button";
import ThemeToggler from "./components/ThemeToggler";
import AppTheme from "./Context/Apptheme";
import Theme from "./Themes";

const Box = (props) => {
  switch (props.value) {
    case 1:
      return <img src={one} alt="one" />;
    case 2:
      return <img src={two} alt="one" />;
    case 3:
      return <img src={three} alt="three" />;
    case 4:
      return <img src={four} alt="one" />;
    case 5:
      return <img src={five} alt="five" />;
    case 6:
      return <img src={six} alt="one" />;

    default:
      return <h6>`</h6>;
  }
};

const generateNumber = () => {
  const min = 1;
  const max = 6;
  const num = Math.floor(Math.random() * (max - min + 1)) + min;

  // console.log(num);
  return num;
};

function Dice() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(7);

  const [pointsUser1, setpointsUser1] = useState(0);
  const [pointsUser2, setpointsUser2] = useState(0);

  const [user1, setUser1] = useState(true);
  const [winMessage, setWinMessage] = useState("");

  // const Themenow = useContext(AppTheme)[0];
  // const currentTheme = Theme[Themenow];

  const winLogic = () => {
    if (user1 && number1 === number2) {
      setWinMessage("User 2 wins !!");
      setpointsUser2(pointsUser2 + number2);
      return winMessage;
    } else if (number1 === number2) {
      setWinMessage("User 1 wins !!");
      setpointsUser1(pointsUser1 + number1);
      return winMessage;
    }
  };

  return (
    <AppTheme.Consumer>
      {(_theme) => {
        console.log(_theme);
        return (
          <div
            style={{
              backgroundImage: `url(${Theme[_theme[0]].backgroundImage})`,
            }}
          >
            <div className="Center">
              <img src={logo} alt="logo" width="15%" height="30%"></img>
            </div>
            <ThemeToggler />
            <h1>
              <span className="word">
                {user1 ? "User 1 turn" : " User 2 turn"}
              </span>
            </h1>

            <div className="Center">
              <div className="boxStyle">
                <Box value={number1} />
              </div>
              <div className="boxStyle">
                <Box value={number2} />
              </div>
            </div>
            <div>
              <Button
                handleClick={() => {
                  setNumber1(generateNumber());
                  setNumber2(generateNumber());
                  winLogic();
                  setUser1(!user1);
                }}
              ></Button>

              <h1 className="win">{winMessage ? winMessage : ""}</h1>
              <h1>
                <span className="word"> User 1 : {pointsUser1}</span>
              </h1>
              <h1>
                <span className="word"> User 2 : {pointsUser2}</span>
              </h1>
              <button
                onClick={() => {
                  setUser1(true);
                  setpointsUser1(0);
                  setpointsUser2(0);
                  setWinMessage("");
                  setNumber1(0);
                  setNumber2(7);
                }}
              >
                Reload Game
              </button>
            </div>
          </div>
        );
      }}
    </AppTheme.Consumer>
  );
}

export default Dice;
