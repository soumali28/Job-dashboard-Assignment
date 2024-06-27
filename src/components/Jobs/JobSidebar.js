import React from "react";
import { FiMessageSquare, FiUsers } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import { TbTrash, TbUserCheck } from "react-icons/tb";

const JobSidebar = () => {
  const data =[
    {
      icon: <FiUsers />,
      text:"Applicants",
      stats: "400"
    },

    {
      icon: <TbUserCheck />,
      text:"Matches",
      stats: "100"
    },
    {
      icon: <FiMessageSquare />,
      text:"Messages",
      stats: "147"
    },
    {
      icon: <IoEyeOutline />,
      text:"Views",
      stats: "800"
    },

  ]
  return (
    <div className="p-6 bg-grey-10 h-full">
      <div className="flex items-center justify-between">
        <button
          className={`flex items-center px-8 py-3  rounded-lg cursor-pointer bg-orange-10 text-orange-100 border border-orange-100`}
        >
          <TbTrash />
          <span className="ml-1 cursor-pointer">Delete job</span>
        </button>

        <button
          className={`flex items-center px-8 py-3 rounded-lg cursor-pointer bg-orange-100 text-white border-2 border-orange-50`}
        >
          <LuPencil />
          <span className="ml-1 cursor-pointer">Edit job</span>
        </button>
      </div>
      <div className="p-2">
        {
          data.map((item, index) => (
            <div className={`flex items-center justify-between py-6 px-3 ${index !== data.length - 1 ? 'border-b' : 'border-none'}`}>
              <div className="flex items-center gap-2 text-grey-500">
                {item.icon}
                <span>{item.text}</span>
              </div>
              <div className="text-grey-300 font-semibold">
                {item.stats}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default JobSidebar;
