import React from "react";
import Search from "../../components/Search";
import { useState } from "react";
import Allstudents from "../../components/Allstudents";

const Studentsmain = ({
  editMode,
}) => {
  

  return (
    <div className="flex basis-[60%] flex-col gap-6 bg-primary px-8 py-4">
      <div className="flex justify-between mb-8">
        <h1 className="text-2xl font-bold text-nightblue">Students</h1>
        <div
          className={` ${
            editMode ? " pointer-events-none blur-[2px] filter" : ""
          }`}
        >
          <Search />
        </div>
      </div>
      <Allstudents/>
    </div>
  );
};

export default Studentsmain;
