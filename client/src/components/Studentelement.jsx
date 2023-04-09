import React from "react";
import Profile from "./Profile";

const Studentelement = ({
  person,
  profilepicture,
  group,
  onClick,
  isActive,
  isDisplayed,
}) => {
  return (
    <div
      className={`${!isDisplayed ? " cursor-pointer" : ""}
    ${isActive ? " bg-darkgray" : " bg-assignmentbg"}
     relative flex h-max gap-[15%] rounded-[10px] py-2 px-4`}
      onClick={onClick}
    >
      <div className=" ">
        <Profile profilepicture={profilepicture} person={person} />
      </div>
      <p
        className={` absolute left-[40%] flex items-center gap-3 text-gray  ${
          isActive ? " text-white opacity-70" : ""
        }`}
      >
        <span className=" text-3xl font-extralight">|</span>
        {group}
      </p>
    </div>
  );
};

export default Studentelement;
/* */
