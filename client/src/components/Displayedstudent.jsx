import React from "react";

const Displayedstudent = ({ person, profilepicture, group }) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-4 h-full w-full">
        <div className=" basis-[40%]">
          <img className="w-full object-cover" src={profilepicture} alt="" />
        </div>
        <div className="flex flex-col whitespace-wrap">
          <p>{person}</p>
          <p>{group}</p>
        </div>
      </div>
      <div>Recent Submissions</div>
    </div>
  );
};
export default Displayedstudent;
