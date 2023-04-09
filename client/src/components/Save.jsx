import React from "react";
import save from "../assets/icons/save.svg";
import { useContext } from "react";
import { AnnouncementContext } from "../teacher/Teacherannounce";
const Save = () => {
  const { setContentToEdit } = useContext(AnnouncementContext)
  return (
    <button
      onClick={() => setContentToEdit()}
      className="flex items-center gap-2 rounded-[10px] bg-accent px-4 py-2.5 font-semibold text-white"
    >
      <span className=" min-w-max">Save</span>
      <img src={save} />
    </button>
  );
};
export default Save;
