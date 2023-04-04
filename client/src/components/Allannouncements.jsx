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

const Allannouncements = ({ items }) => {
  const [activeCardIndex, setActiveCardIndex] = useState();

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
    <div className="flex flex-col gap-4 rounded-[10px] bg-white px-8 py-6">
      <div className="flex justify-between">
        <p className="mb-3 text-lg font-semibold text-nightblue">
          Announcements
        </p>
      </div>

      <section className="flex">
        {announcements.map((group) => {
          return (
            <SwiperSlide>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 ">
                {group.map((Element, index) => {
                  return (
                    <Announcementelement
                      key={index}
                      onClick={() => setActiveCardIndex(index)}
                      isActive={activeCardIndex === index}
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
