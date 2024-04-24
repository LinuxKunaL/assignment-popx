import React from "react";
import { Link } from "react-router-dom";

const Welcome: React.FC = () => {
  return (
    <div className="flex h-full items-end">
      <div className="flex p-5 mb-3 flex-col gap-5 w-full">
        <div className="flex gap-3 flex-col">
          <h2 className="text-3xl font-semibold">Welcome to Popx</h2>
          <p className="text-xl text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex text-center flex-col gap-4">
          <Link
            to={"/createAccount"}
            className="bg-[#6C25FF] transition-all hover:bg-[#6b3cca] text-lg font-semibold text-white p-3 rounded-md"
          >
            Create Account
          </Link>
          <Link
            to={"/login"}
            className="bg-[#6C25FF4B] transition-all hover:bg-[#6e25ff7c] text-lg font-semibold text-gray-900 p-3 rounded-md"
          >
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
