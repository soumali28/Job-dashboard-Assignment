import React from "react";
import SkillBadge from "../SkillBadge";

const JobsDesp = () => {
  return (
    <div className="border-b px-20 py-6">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <h4 className="mb-2 text-sm text-grey-450">Skills Required</h4>
          <SkillBadge />
        </div>

        <div className="col-span-1">
          <h4 className="mb-2 text-sm text-grey-450">Preffered Language</h4>
          <span className="text-md font-semibold text-grey-300">English</span>
        </div>
        <div className="col-span-1">
          <h4 className="mb-2 text-sm text-grey-450">Type</h4>
          <span className="text-md font-semibold text-grey-300">
            Full Time
          </span>
        </div>
        <div className="col-span-1">
          <h4 className="mb-2 text-sm text-grey-450">Years of Experience</h4>
          <span className="text-md font-semibold text-grey-300">
            3+ Years of Experience
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobsDesp;
