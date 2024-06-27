import React, { useState } from "react";
import { FiBriefcase, FiMessageSquare } from "react-icons/fi";
import { PiBellSimple, PiHandCoins } from "react-icons/pi";
import profile from "../assets/profile.png";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import NotificationAlert from "./NotificationAlert";
const Navbar = () => {
  const navbarCompo = [
    {
      icon: <FiBriefcase />,
      title: "Jobs",
      link: "/",
    },
    {
      icon: <FiMessageSquare />,
      title: "Messages",
      link: "/messages",
    },
    {
      icon: <PiHandCoins />,
      title: "Payments",
      link: "/payment",
    },
  ];
  const [activeNav, setActiveNav] = useState(null);
  return (
    <div className="flex justify-between items-center px-6 py-4 border-b">
      <div className="bg-grey-50 py-2 px-4 text-orange-100">
        <p>Logo</p>
      </div>
      <div className="flex items-center justify-evenly gap-12 border rounded-full p-2">
        {navbarCompo.map((item) => (
          <Link
            className={`relative flex items-center px-3 py-2 rounded-full cursor-pointer ${
              activeNav === item.title
                ? "bg-orange-100 text-white border-2 border-orange-50 hover:text-white"
                : "text-grey-100 hover:text-orange-50"
            }`}
            key={item.title}
            to={item.link}
            onClick={() => setActiveNav(item.title)}
          >
            <div className="relative flex items-center">
              {item.icon}
              {item.title === "Messages" && (
                <NotificationAlert />
              )}
            </div>
            <span className="ml-1 cursor-pointer">{item.title}</span>
          </Link>
        ))}
      </div>
      <div className="relative flex items-center gap-3">
        <div className="relative">
          <PiBellSimple/>
          <NotificationAlert />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-[25px]">
            <img src={profile} alt="profile" className="rounded-full" />
          </div>
          <button>
            <IoIosArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
