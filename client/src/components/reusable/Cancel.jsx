import React from "react";
import quit from "../../assets/icons/quit.svg";


const Cancel = ({ onClick, text }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="flex items-center gap-2 rounded-[5px] border border-darkgray p-1.5 text-darkgray"
    >
      {text ? <span>Cancel</span> : null}
      <img src={quit} />
    </button>
  );
};

export default Cancel;
