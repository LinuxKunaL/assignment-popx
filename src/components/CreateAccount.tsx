import React from "react";
import Input from "./Ui/Input";
import { Link } from "react-router-dom";

const CreateAccount: React.FC = () => {
  return (
    <div className="p-5 mt-3 flex flex-col gap-3 justify-between h-full">
      <div className="flex flex-col gap-5">
        <h2 className="text-3xl font-semibold">
          Create your account <br /> Popx account
        </h2>
        <div className="flex flex-col gap-5">
          <Input type="text" required={true} label="Full Name" />
          <Input type="tel" required={true} label="Phone Number" />
          <Input type="email" required={true} label="Email Address" />
          <Input type="password" required={true} label="Password" />
          <Input type="text" required={false} label="Company Name" />
          <div className="flex gap-3 flex-col">
            <span>
              Are you an Agency? <b className="text-red-500">*</b>
            </span>
            <div className="flex items-start gap-5">
              <div className="flex items-center flex-row gap-2">
                <input
                  className="accent-[#6C25FF] size-5"
                  type="radio"
                  name="ss"
                  id="yes"
                />
                <label htmlFor="yes">Yes</label>
              </div>
              <div className="flex items-center flex-row gap-2">
                <input
                  className="accent-[#6C25FF] size-5"
                  type="radio"
                  name="ss"
                  id="no"
                />
                <label htmlFor="no">No</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link
        to={"/profile"}
        className="bg-[#6C25FF] text-center mb-4 transition-all hover:bg-[#6b3cca] text-lg font-semibold text-white p-3 rounded-md"
      >
        Create Account
      </Link>
    </div>
  );
};

export default CreateAccount;
