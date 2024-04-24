import React, {
  HTMLInputTypeAttribute,
  useEffect,
  useRef,
  useState,
} from "react";

interface props {
  label: string;
  type: HTMLInputTypeAttribute;
  required: boolean;
  value?: Function | any;
}

const Input: React.FC<props> = ({ label, type, required, value }) => {
  const labelRef = useRef<HTMLLabelElement>(null);
  const [input, setInput] = useState<string>();

  useEffect(() => {
    if (typeof value === "function") {
      value(input);
    }
  }, [input]);

  return (
    <div className="border-2 p-2 py-3 relative rounded-md">
      <label
        ref={labelRef}
        className="text-[#6C25FF] transition-all -z-1  px-3 bg-[#f7f8f9] font-semibold absolute"
      >
        {label} {required ? <b className="text-red-500">*</b> : null}
      </label>
      <input
        onMouseEnter={() => {
          if (!input) {
            labelRef.current?.classList.toggle("-top-3");
          }
        }}
        onMouseLeave={() => {
          if (!input) {
            labelRef.current?.classList.toggle("-top-3");
          }
        }}
        onChange={(e) => {
          setInput(e.target.value);
          if (input) {
            labelRef.current?.classList.add("-top-3");
          }
        }}
        type={type}
        className="bg-transparent relative outline-none border-none"
      />
    </div>
  );
};

export default Input;
