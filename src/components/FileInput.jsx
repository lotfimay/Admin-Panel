import React from "react";

const FileInput = () => {
  return (
    <div className="bg-red-400 h-40 w-50">
      <input type="file" accept="image/*" />
    </div>
  );
};

export default FileInput;
