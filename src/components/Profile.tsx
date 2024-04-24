import React from "react";
// @ts-ignore
import userAvatar from "../assets/user.png";
// @ts-ignore
import cameraLogo from "../assets/cameraLogo.svg";

const Profile: React.FC = () => {
  return (
    <div className="gap-5 h-full flex flex-col">
      <div className="bg-white p-5 shadow-lg shadow-gray-500/10">
        <span className="text-lg font-semibold">Account Setting</span>
      </div>
      <div className="flex flex-col gap-5 p-4">
        <div className="flex gap-3">
          <div className="relative">
            <img src={userAvatar} alt="" />
            <img className="absolute bottom-0 right-0" src={cameraLogo} alt="" />
          </div>
          <div>
            <span className="font-semibold">Marry Doe</span>
            <p className="text-gray-600">Marry@Gmail.Com</p>
          </div>
        </div>
        <p className="text-lg">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
      <hr className=" border-dashed border-[2px] " />
    </div>
  );
};

export default Profile;
