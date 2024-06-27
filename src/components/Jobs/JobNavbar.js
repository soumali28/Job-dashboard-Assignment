import React, { useState } from "react";

const JobNavbar = () => {
  const navbarCompo = [
    {
      title: "Job Preview",
      link: "/",
    },
    {
      title: "Applicants",
      link: "/",
    },
    {
      title: "Match",
      link: "/",
    },
    {
      title: "Messages",
      link: "/",
    },
  ];
  const [activeNav, setActiveNav] = useState(null);
  return (
    <div>
      <ul className="flex items-center gap-8 py-3 px-12 border-b">
        {navbarCompo.map((item) => (
          <li
            key={item.title}
            className={`cursor-pointer ${
              activeNav === item.title
                ? "text-orange-100 font-bold border-b-2 border-orange-100"
                : "text-grey-200"
            }`}
            onClick={() => setActiveNav(item.title)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobNavbar;
