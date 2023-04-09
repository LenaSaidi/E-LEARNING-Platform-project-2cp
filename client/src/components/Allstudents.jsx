import React from "react";
import { useState } from "react";
import Seemore from "./Seemore";
import { announcement } from "../teacher/content/main";
import { students } from "../teacher/content/main";
import Announcementelement from "./Announcementelement";
import Studentelement from "./Studentelement";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import { useContext } from "react";
import { StudentsContext } from "../teacher/Teacherstudents";

const Allstudents = () => {
  const user = "said";
  const { barContent, setBarContent, activeCardIndex, setActiveCardIndex } =
    useContext(StudentsContext);

  return (
    <div className={`flex flex-col gap-4 rounded-[10px] bg-white py-6 px-8`}>
      <div className="flex justify-between">
        <p className="mb-3 text-lg font-semibold text-nightblue">
          Your students
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {students.map((student, index) => {
          return (
            <Studentelement
              person={student.person}
              group={student.group}
              profilepicture={student.profilepicture}
              onClick={() => {
                setActiveCardIndex(index);
                setBarContent(student);
              }}
              isActive={activeCardIndex === index && barContent !== null}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Allstudents;
