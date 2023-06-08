import React from "react";
import axios from "axios";
import { useState } from "react";

const DeleteDialog = ({ item, onClose, table , removeItem }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const onDelete = () => {
    setIsDeleting(true);
    axios
      .delete(`http://localhost:8000/api/${table}/${item.id}`)
      .then((response) => {
        console.log(response);
        removeItem(item.id);
        onClose();
      })
      .catch((error) => {
        setError(error);
        setIsDeleting(false);
      });
  };
  return (
    <div>
      <div
        onClick={onClose}
        className="fixed left-0 bottom-0 right-0 top-0 z-999 bg-slate-500 bg-opacity-50"
      ></div>
      <div className="righ-1/2 left-2/5 fixed top-1/3 z-999 w-3/5 rounded-md bg-white p-10 text-center  text-slate-700">
        <div>
          <h4 className="m-auto w-fit font-extrabold">Delete {item.name}?</h4>
        </div>
        <div className="m-4">
          <p>
            Are you sure you want to remove
            <span className="font-bold"> "{item.name}" </span> from the store ?
          </p>
          <p>you can't undo this action</p>
          {error && <p className="text-[#FF0000]">Error : {error.message}</p>}
        </div>
        <div className="m-4 flex items-center justify-center gap-4 font-semibold">
          <button
            className="cursor-pointer rounded-md bg-slate-500 py-2 px-6 text-white"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="cursor-pointer rounded-md bg-red-500 py-2 px-6 text-white disabled:opacity-75"
            onClick={onDelete}
            disabled={isDeleting}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
