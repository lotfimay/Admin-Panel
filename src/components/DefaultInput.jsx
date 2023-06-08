import React from "react";

const DefaultInput = ({ label, type, changeHandler }) => {
  return (
    <div>
      <label
        className="mb-3 block font-extrabold text-black dark:text-white"
        htmlFor="product-name"
      >
        {label}
      </label>
      <input
        id="product-name"
        type={type}
        onChange={changeHandler}
        placeholder={label}
        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
      />
    </div>
  );
};

export default DefaultInput;
