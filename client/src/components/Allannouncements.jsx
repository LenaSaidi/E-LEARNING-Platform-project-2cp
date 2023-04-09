import React from "react";
import { useState } from "react";
import Seemore from "./Seemore";
import { announcement } from "../teacher/content/main";
import Announcementelement from "./Announcementelement";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import { useContext } from "react";
import { AnnouncementContext } from "../teacher/Teacherannounce";

const Allannouncements = ({
  items,
  setBarContent,
  activeCardIndex,
  setActiveCardIndex,
  barContent,
}) => {
  const { setContentToEdit, editMode } = useContext(AnnouncementContext);
  const user = "said";
  const splitIntoFours = (array) => {
    const result = [];
    for (let i = 0; i < array.length; i += 4) {
      const group = array.slice(i, i + 4);
      result.push(group);
    }
    return result;
  };
  const announcements = splitIntoFours(items);

  return (
    <div
      className={` ${
        editMode ? " pointer-events-none blur-sm filter" : ""
      } flex flex-col gap-4 rounded-[10px] bg-white py-6 px-8`}
    >
      <div className="flex justify-between">
        <p className="mb-3 text-lg font-semibold text-nightblue">
          Announcements
        </p>
      </div>

      <section className="flex">
        {announcements.map((group) => {
          return (
            <SwiperSlide>
              <div className="grid grid-cols-2 grid-rows-2 gap-4">
                {group.map((Element, index) => {
                  return (
                    <Announcementelement
                      isDisplayed={false}
                      onClick={() => {
                        setActiveCardIndex(index);
                        setBarContent(Element);
                        setContentToEdit(Element);
                      }}
                      isActive={
                        activeCardIndex === index && barContent !== null
                      }
                      profilepicture={Element.profilepicture}
                      person={Element.person}
                      content={Element.content}
                      image={Element.image}
                    />
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </section>
    </div>
  );
};

export default Allannouncements;
