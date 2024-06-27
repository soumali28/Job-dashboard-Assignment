import React from "react";
import xd from "../assets/xd.png";
import figma from "../assets/figma.png";
import illustrator from "../assets/illustrator.png";

const SkillBadge = () => {
  const skills = [
    {
      src: figma,
      skill: "Figma",
    },
    {
      src: illustrator,
      skill: "Adobe Illustrator",
    },
    {
      src: xd,
      skill: "Adobe XD",
    },
  ];
  return (
    <div className="flex flex-col inline-block">
      {skills.map((item) => (
        <div>
          <div
            className="inline-flex items-center border p-1 rounded-md gap-1 mb-2"
            key={item.skill}
          >
            <img src={item.src} alt="skills" className="w-[14px] h-[14px]" />
            <span className="text-xs text-grey-400 font-medium mr-1">
              {item.skill}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillBadge;
