import React from "react";
import Search from "../../components/Search";
import Save from "../../components/Save";
import Cancel from "../../components/Cancel";
import Newannounce from "../../components/Newannounce";
import Editannouncement from "../../components/Editannouncement";
import Allannouncements from "../../components/Allannouncements";
import { useState, useContext } from "react";
import { AnnouncementContext } from "../Teacherannounce";

const Announcemain = ({ setBarContent, barContent, items, setItem }) => {
  const [activeCardIndex, setActiveCardIndex] = useState();
  const { editMode } = useContext(AnnouncementContext);
  return (
    <div className="flex basis-[60%] flex-col gap-6 bg-primary p-8">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-nightblue">Announcements</h1>
        <div className={` ${editMode ? " filter blur-[2px] pointer-events-none" : "" }`}>
          <Search />
        </div>
      </div>

      <div className="">
        <Newannounce
          setItem={setItem}
          setActiveCardIndex={setActiveCardIndex}
        />
        <div className="flex gap-5"></div>
      </div>
      <div>
        <Allannouncements
          items={items}
          barContent={barContent}
          setBarContent={setBarContent}
          activeCardIndex={activeCardIndex}
          setActiveCardIndex={setActiveCardIndex}
        />
      </div>
    </div>
  );
};

export default Announcemain;
