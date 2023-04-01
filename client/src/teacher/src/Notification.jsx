import React from 'react'
import profile from '../../assets/profile/profileholder.png'
import Profile from '../../components/Profile';
import { notificaiton } from '../content/notification';
import Notificationbill from '../../components/Notificationbill';
import Upcoming from '../../components/Upcoming';
import Recent from '../../components/Recent';

const Notification = () => {
  return (
    <div className="sticky right-0 top-0 flex max-h-[100vh] basis-[23%] flex-col gap-8 bg-white p-4">
      <div className="flex  justify-between ">
        <Notificationbill isnotification={notificaiton} />
        <Profile profilepicture={profile} person={"said nouasria"} order={3} />
      </div>
      <div>
        <Upcoming />
      </div>
      <div>
        <Recent />
      </div>
    </div>
  );
}

export default Notification