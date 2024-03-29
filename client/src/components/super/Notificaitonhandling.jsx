import React, { useContext, useState } from "react";
import notification from "../../assets/icons/notification.svg";
import notificationemptyicon from "../../assets/icons/notificationempty.svg";
import notificationrecievedicon from "../../assets/icons/notificationrecieved.svg";
import Notificationcontentelement from "../super elements/Notificationcontentelement";
import close from "../../assets/icons/close.svg";
import { propsContext } from "../../content page/Mainapp";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchNotificationIetm, fetchNotificationItems } from "../../content page/dataFetch";



const Notificaitonhandling = () => {
  const { notification} = useContext(propsContext) ; 

  const { notificationReaded } = useContext(propsContext);

  if (false && !notificationReaded[0]) {
    var notificationIcon = notificationrecievedicon;
  } else {
    var notificationIcon = notificationemptyicon;
  }

  const [notificaitonState, setNoficationState] = useState(notificationIcon);

  const [showNotificationcontent, setShowNotificationcontent] =
    useState("hidden");
  console.log(notification) ; 
    return (
    <>
      <div
        className=""
        onClick={() => {
          if (notificaitonState === notification) {
            setNoficationState(notificationIcon);
            setShowNotificationcontent("hidden");
          } else {
            setNoficationState(notification);
            setShowNotificationcontent("block");
            notificationReaded[1](true);
          }
        }}
      >
        <img src={notificaitonState} />
      </div>
      <div
        className={`absolute z-20 ${showNotificationcontent} top-[5%] left-0 right-0 bottom-0  p-4`}
      >
        <div className=" flex h-full  flex-col gap-4 rounded-[10px] bg-primary p-3 ">
          <div className="flex items-center justify-between">
            <h4>Notificaiton</h4>
            <div
              onClick={() => {
                setShowNotificationcontent("hidden");
                setNoficationState(notificationIcon);
              }}
            >
              <img src={close} />
            </div>
          </div>
          <div className="flex flex-col gap-4 overflow-scroll">
            {notification.map((Element) => {
              console.log(Element.message);
              return (
                <Notificationcontentelement notificationelement={Element} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
  }

export default Notificaitonhandling;
