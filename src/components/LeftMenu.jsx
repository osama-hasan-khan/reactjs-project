import React, { useContext, useState } from "react";
import RoundedBtn from "./Common/RoundedBtn";
import { MdPeopleAlt } from "react-icons/md";
import { TbCircleDashed } from "react-icons/tb";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { BiFilter } from "react-icons/bi";
import { pp } from "../assets/whatsapp";
import Chats from "./Chats";
import Button from "./Common/Button";
import DropDown from "./Common/DropDown";
import DropDownItem from "./Common/DropDownItem";
import { CommunitiesContext } from "../context/CommunitiesContext";

const LeftMenu = () => {
  const [filter, setFilter] = useState(false);

  const { handleClose } = useContext(CommunitiesContext);

  return (
    // LeftMenu Container

    <div className="flex flex-col border-r border-gray-700 w-[100%] h-screen">
      {/* Profile Nav */}

      <div className="flex justify-between items-center bg-[#202d33] h-[60px] p-3">
        {/* Profle picture */}

        <img
          src={pp}
          alt="profile_picture"
          className="rounded-full w-[40px] cursor-pointer"
          onClick={handleClose}
        />

        {/* Profile nav buttons */}
        <div className="flex justify-between items-center w-[175px]">
          <RoundedBtn icon={<MdPeopleAlt />} />
          <RoundedBtn icon={<TbCircleDashed />} />
          <RoundedBtn icon={<BsFillChatLeftTextFill />} />
          {/* <RoundedBtn icon={<HiDotsVertical />} /> */}
          {/* <HiDotsVertical className="text-[#8796a1] text-xl cursor-pointer" /> */}
          <DropDown trigger={<Button>{<HiDotsVertical />}</Button>}>
            <DropDownItem>New Group</DropDownItem>
            <DropDownItem>New Community</DropDownItem>
            <DropDownItem>Starred message</DropDownItem>
            <DropDownItem>Select chats</DropDownItem>
            <DropDownItem>Settings</DropDownItem>
            <DropDownItem>Log out</DropDownItem>
          </DropDown>
        </div>
      </div>

      {/* Saerch and filter */}
      <div className="flex justify-between items-center h-[60px] p-2">
        {/* search input */}
        <input
          type="text"
          placeholder="Search or start new chat"
          className="rounded-lg bg-[#202d33] text-[#ffffff99] text-sm font-light
           outline-none px-4 py-1 w-[400px] h-[35px] placeholder:text-[#959da7] placeholder:text-sm placeholder:font-light"
        />
        <button
          onClick={() => setFilter(!filter)}
          className={`text-2xl m-2 p-1 rounded-full text-gray-500 
        ${
          filter
            ? "bg-emerald-500 text-white rounded-full hover:bg-emerald-700"
            : "text-[#8796a1] hover:bg-[#3c454c]"
        }`}
        >
          <BiFilter />
        </button>
      </div>

      {/* Chats */}

      <Chats filter={filter} />
    </div>
  );
};

export default LeftMenu;
