import React, { useState } from "react";
import RoundedBtn from "./Common/RoundedBtn";
import { messagesData } from "../data/whatsapp";
import { MdSearch, MdSend } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { BiHappy } from "react-icons/bi";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { cs1 } from "../assets/whatsapp";
import Message from "./Message";

const ChatDetails = () => {
  const [messages, setMessages] = useState(messagesData);

  return (
    //  Chat detail main container
    <div className="flex flex-col h-screen">
      {/* Contact nav */}
      <div className="flex justify-between bg-[#202d33] h-[60px] p-3">
        {/* Contact info */}

        <div className="flex items-center">
          {/* Profile picture */}
          <img
            src={cs1}
            alt="profile_picture"
            className="w-[45px] h-[45px] rounded-full mr-5"
          />

          {/* Info */}
          <div className="flex flex-col">
            {/* Contact */}
            <h1 className="text-white font-medium">Tommy Hill</h1>

            {/* Status */}
            <p className="text-[#8796a1] text-xs">online</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center w-[85px]">
          <RoundedBtn icon={<MdSearch />} />
          <RoundedBtn icon={<HiDotsVertical />} />
        </div>
      </div>

      {/* Message section */}
      <div
        className="bg-[url('assets/images/bg.webp')] bg-contain overflow-y-scroll py-3 h-[100%]"
        style={{ padding: "12px 7%" }}
      >
        {messages.map((msg) => {
          return (
            <Message
              msg={msg.msg}
              time={msg.time}
              isLink={msg.isLink}
              img={msg.img}
              sent={msg.sent}
            />
          );
        })}
      </div>

      {/* Bottom section */}
      <div className="flex items-center bg-[#202d33] w-[100%] h-[70px] p-2">
        {/* Emoji btn */}
        <RoundedBtn icon={<BiHappy />} />

        {/* Upload btn */}
        <span className="mr-2">
          <RoundedBtn icon={<AiOutlinePaperClip />} />
        </span>
        {/* Input bar */}
        <input
          type="text"
          placeholder="Type a message"
          className="bg-[#2c3943] rounded-lg outline-none text-sm text-neutral-200
          w-[100%] h-[100%] px-3 placeholder:text-sm placeholder:text-[#8796a1]"
        />
        {/* Mic/Send btn */}
        <span className="ml-2 flex">
          <RoundedBtn icon={<BsFillMicFill />} />
          <RoundedBtn icon={<MdSend />} />
        </span>
      </div>
    </div>
  );
};

export default ChatDetails;
