import React, { useContext } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { CommunitiesContext } from "../../context/CommunitiesContext";

const Communties = () => {
  const { isOpen, handleClose } = useContext(CommunitiesContext);

  return (
    <div className={`${isOpen ? "h-screen min-w-[450px] right-0" : "hidden"}`}>
      <div className="flex justify-center items-center h-[120px] bg-[]">
        <AiOutlineArrowLeft onClick={handleClose} className="cursor-pointer text-white" />
      </div>
    </div>
  );
};

export default Communties;
