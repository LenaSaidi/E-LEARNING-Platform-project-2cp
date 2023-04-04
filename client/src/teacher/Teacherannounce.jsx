import React from "react";
import Sidebarteacher from "./src/Sidebarteacher";
import Notification from "./src/Notification";
import Announce from "./src/Announcemain";
import Announcebar from "./src/Announcebar";

const Teacherannounce = () => {
  return (
    <div className="flex">
      <Sidebarteacher />
      <Announce />
      <Announcebar />
    </div>
  );
};

export default Teacherannounce;
