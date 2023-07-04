import React from "react";

function RoundedBtn({ icon }) {
  return (
    <button className="text-[#8796a1] text-xl p-2 rounded-full hover:bg-[#3c454c]">
      {icon}
    </button>
  );
}

export default RoundedBtn;
