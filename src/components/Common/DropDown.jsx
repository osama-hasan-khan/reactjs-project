import React, { useState } from "react";

const DropDown = ({ children, trigger }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-fit relative">
      <div onClick={() => setShow((curr) => !curr)}>{trigger}</div>
      <div
        className={`
      min-w-max absolute right-0 mt-3 mr-3 text-white divide-y divide-gray-100
      rounded-l  overflow-hidden shadow-2xl
      `}
      >
        {show && <ul>{children}</ul>}
      </div>
    </div>
  );
};

export default DropDown;
