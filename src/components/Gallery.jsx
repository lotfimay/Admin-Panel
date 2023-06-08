import React from "react";

const Gallery = ({ formik }) => {
  const image =
    typeof formik.values.img === "string"
      ? formik.values.img
      : URL.createObjectURL(formik.values.img);

  return (
    <div className="flex w-full items-center  justify-center">
      <div className="relative mb-4 px-4">
        <img
          src={image}
          alt={`Product picture`}
          className="h-32 w-full object-cover"
        />

        <button
          className="absolute top-0 right-0 mt-1 mr-1 rounded bg-red-600 px-2 py-1 text-white"
          type="button"
          onClick={(e) => {
            formik.setFieldValue("img", null);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Gallery;
