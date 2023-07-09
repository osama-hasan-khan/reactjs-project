import React from "react";
import { MdSearch } from "react-icons/md";
import Sidebar from "./Sidebar";

const InputBar = () => {
  return (
    <div>
      <div>
        <MdSearch size={22} className="cursor-pointer text-gray-400" />
      </div>
    </div>
  );
};

export default InputBar;
