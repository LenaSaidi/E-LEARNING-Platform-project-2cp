import React from "react";
import Search from "../../components/Search";
import Newannounce from "../../components/Newannounce";
import Allannouncements from "../../components/Allannouncements";
import { announcement } from "../content/main";
import { useState } from "react";

const Announcemain = () => {
  const [items, addItem] = useState(announcement);

  return (
    <div className="flex basis-[60%] flex-col gap-6 bg-primary p-8">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-nightblue">Announcements</h1>
        <Search />
      </div>

      <div className="">
        <Newannounce addItem={addItem} />
      </div>
      <div>
        <Allannouncements items={items} />
      </div>
    </div>
  );
};

export default Announcemain;
