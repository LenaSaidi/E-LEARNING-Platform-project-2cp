import React from "react";
import quit from "../../assets/icons/quit.svg";

const Cancel = ({text}) => {
  return (
    <button
      type="submit"
      className="flex items-center gap-2 rounded-[5px]  p-2 text-darkgray border border-darkgray"
    >
      {text ? <span>Cancel</span> : null}
      
      <img src={quit} />
    </button>
  );
};
export default Cancel;
