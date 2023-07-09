import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { SideBarContext } from "../../context/SideBarContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SideBarContext);

  return (
    <div className={`${isOpen ? "h-screen min-w-[450px]" : "hidden"}`}>
      <div className="flex bg-[#202d33] h-[60px]">
        <div className="flex items-center justify-center ml-5">
          <RxCross1
            className="text-gray-400 text-[20px] cursor-pointer"
            onClick={handleClose}
          />
          <p className="text-gray-100 font-sans ml-7">Search Messages</p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-2">
        <div className="relative flex items-center w-[92%]">
          <AiOutlineArrowLeft className="text-white bg-[#202d33] absolute ml-2" />
          <input
            type="text"
            placeholder="search..."
            className="outline-none p-1 pr-3 pl-10 w-[100%] bg-[#202d33] rounded-sm text-white"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-16">
        <p className="text-gray-600 text-[15px]">
          Search for messages with Tommy Hillls
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
