import React from "react";
import Profile from "./Profile";
import { useState } from "react";

const Announcementelement = ({
  profilepicture,
  person,
  content,
  image,
  onClick,
  isActive,
}) => {
  return (
    <div
      className={
        isActive
          ? "flex cursor-pointer flex-col gap-2 rounded-[10px] bg-darkgray p-2 text-nightblue"
          : "flex cursor-pointer flex-col gap-2 rounded-[10px] bg-assignmentbg p-2 text-darkgray"
      }
      onClick={onClick}
    >
      <div>
        <Profile profilepicture={profilepicture} person={person} />
      </div>
      <div className="flex w-full items-end">
        <div style={{ flexBasis: image ? "70%" : "100%" }}>
          <p>{content}</p>
        </div>
        <div style={{ flexBasis: image ? "30%" : "0%" }}>
          {image ? <img className="w-full object-cover" src={image} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Announcementelement;
