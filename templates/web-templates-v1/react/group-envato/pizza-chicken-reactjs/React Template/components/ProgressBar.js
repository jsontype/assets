"use client";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const ProgressBar = ({ value, color, extraCls, emptyFill }) => {
  return (
    <div className={`canvas ${extraCls ? extraCls : "one"}`}>
      <CircularProgressbar
        width={120}
        value={value}
        strokeWidth={3}
        styles={buildStyles({
          pathColor: color ? color : "#EC3D08",
          trailColor: emptyFill ? emptyFill : "#FBDDD5",
        })}
      />{" "}
    </div>
  );
};
export default ProgressBar;
