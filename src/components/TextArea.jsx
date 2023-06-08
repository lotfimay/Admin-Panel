import React from "react";

const TextArea = ({ label, setValue }) => {
  const changeHandler = (e) => {
    console.log(e);
    setValue(e.target.value);
  };
  return (
    <div>
      <label className="mb-3 block font-extrabold text-black dark:text-white">
        {label}
      </label>
      <textarea
        rows="6"
        disabled=""
        onChange={changeHandler}
        placeholder={label}
        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5  font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary dark:disabled:bg-black"
      ></textarea>
    </div>
  );
};

export default TextArea;
