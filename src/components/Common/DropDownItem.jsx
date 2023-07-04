import React from "react";

const DropDownItem = ({ children }) => {
  return (
    <li
      className={`flex gap-3 px-4 py-2 text-white
        cursor-pointer bg-[#202d33] font-mono hover:bg-[#202d18]`}
    >
      {children}
    </li>
  );
};

export default DropDownItem;
