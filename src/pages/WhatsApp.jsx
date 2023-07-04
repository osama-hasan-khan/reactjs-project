import React from "react";
import LeftMenu from "../components/LeftMenu";
import ChatDetails from "../components/ChatDetails";

// TODO: LodingScreen Component

const WhatsApp = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      {/* component container */}
      <div className="flex justify-start whatsapp-bp:justify-center items-center bg-[#111a21] h-screen">
        {/* leftMenu */}
        <div className="bg-[#111a21] min-w-[340px] max-w-[450px] h-[100%] w-[100%]">
          <LeftMenu />
        </div>
        {/* ChatDetail */}
        <div className="bg-[#222f35] min-w-[415px] max-w-[1120px] w-[100%] h-[100%]">
          <ChatDetails />
        </div>
      </div>
    </div>
  );
};

export default WhatsApp;
