import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";

export default function App() {
  const [rotate15Right, setRotate15Right] = useState(0);
  const [rotate15Left, setRotate15Left] = useState(0);
  const [move10Steps, setMove10Steps] = useState(0);

  const onClickFlag = () => {
    console.log("FLag Clicked");
  };
  const onClickSprite = () => {
    console.log("Sprint Clicked ");
  };
  const onClickmove10Steps = steps => {
    if (move10Steps >= 100) setMove10Steps(0);
    else setMove10Steps(move10Steps + steps);
  };
  const onClickTurn15DegRight = deg => {
    if (rotate15Right >= 360) setRotate15Right(0);
    else setRotate15Right(rotate15Right + deg);
  };
  const onClickTurn15DegLeft = deg => {
    if (rotate15Left >= 360) setRotate15Left(0);
    else setRotate15Left(rotate15Left + deg);
  };

  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar
            onClickFlag={onClickFlag}
            onClickSprite={onClickSprite}
            onClickmove10Steps={onClickmove10Steps}
            onClickTurn15DegRight={onClickTurn15DegRight}
            onClickTurn15DegLeft={onClickTurn15DegLeft}
          />{" "}
          <MidArea />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea
            moveSteps={move10Steps}
            rotateRight={rotate15Right}
            rotateLeft={rotate15Left}
          />
        </div>
      </div>
    </div>
  );
}
