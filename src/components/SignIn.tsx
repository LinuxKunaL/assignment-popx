import React, { useState } from "react";
import Input from "./Ui/Input";
import { Link } from "react-router-dom";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="p-5 mt-3 flex flex-col gap-5  h-full">
      <div className="flex flex-col gap-5">
        <h2 className="text-3xl font-semibold">
          Signin to your <br /> PopX account
        </h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <Input
          type="email"
          required={true}
          label="Email Address"
          value={setEmail}
        />
        <Input
          type="password"
          required={true}
          label="Password"
          value={setPassword}
        />
        {password?.length > 0 && email?.length > 0 ? (
          <Link
            to={"/profile"}
            className="bg-[#6C25FF] text-center transition-all hover:bg-[#6e25ffd8] text-lg font-semibold text-white p-3 rounded-md"
          >
            Login
          </Link>
        ) : (
          <Link
            to={"/login"}
            className="bg-[#CBCBCB] text-center transition-all hover:bg-[#adadad] text-lg font-semibold text-white p-3 rounded-md"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default SignIn;
