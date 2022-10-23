import React from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea(props) {
  const { moveSteps, rotateRight, rotateLeft } = props || {};
  console.log("move Steps==>", moveSteps);
  console.log("rotateRight==>", rotateRight);
  console.log("rotateLeft==>", rotateLeft);
  return (
    <div className={`flex-none h-1/2 w-11/12 overflow-y-auto p-2 `}>
      <div className=" h-full w-full flex content-center items-center justify-center">
        <div
          className={` h-35 w-35 ${moveSteps ? `ml-${moveSteps}` : ""} ${
            rotateLeft ? `transform origin-center -rotate-${rotateLeft}` : ""
          }  ${
            rotateRight ? `transform origin-center rotate-${rotateRight}` : ""
          }`}
        >
          <CatSprite />
        </div>
      </div>
    </div>
  );
}
