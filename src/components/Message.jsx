import React from "react";

const Message = ({ msg, time, isLink, img, sent }) => {
  // Message container
  return (
    <div
      className={`flex justify-center items-center rounded-md w-fit my-1 ${
        sent ? "bg-[#005c4b] ml-auto" : "bg-[#202d33] mr-auto"
      }`}
    >
      {/* Image message */}
      {img ? (
        <div className="relative w-[100%] p-2">
          {/* Image */}
          <img
            src={img}
            alt="img_message"
            className="rounded-md max-w-[270px] w-[100%]"
          />

          {/* Time */}
          <p className="absolute right-2 bottom-3 text-[#8796a1] text-[10px] min-w-[50px]">
            {time}
          </p>
        </div>
      ) : (
        // Text (link/normal) message
        <div className="flex justify-between items-end max-w-[410px] p-2 break-words">
          <h1 className="text-[#e9edef]">{msg}</h1>
        </div>
      )}
    </div>
  );
};

export default Message;
