import React from "react";
import { PiDotOutlineFill } from "react-icons/pi";
import Badge from "../Badge";
import { GrLocation } from "react-icons/gr";
import { LiaCoinsSolid } from "react-icons/lia";

const JobHeader = (props) => {
  return (
    <div className="border-b px-20 py-6">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-[35px] text-grey-300 font-semibold">
          {props.title}
        </h2>
        <PiDotOutlineFill size={20} className="text-grey-100" />
        <span className="text-grey-200 text-sm">
          posted {props.startDate} days ago
        </span>
        <Badge status={props.status} />
      </div>

      <div className="flex items-center text-xl gap-2 text-grey-350">
        <div className="flex items-center gap-1">
          <GrLocation />
          <span>{props.location}</span>
        </div>
        <PiDotOutlineFill size={20} className="text-grey-100" />
        <div className="flex items-center gap-1">
          <LiaCoinsSolid />
          <span>{props.range}</span>
        </div>
      </div>
    </div>
  );
};

export default JobHeader;
