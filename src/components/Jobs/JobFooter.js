import React from "react";
import profile from "../../assets/profile.png";

const JobFooter = (props) => {
  return (
    <div className="px-12 pt-6 pb-8">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-[40px] h-[40px]">
          <img src={profile} alt="profile" className="rounded" />
        </div>

        <h3 className="font-medium text-grey-500 text-xl">{props.company}</h3>
      </div>

      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="col-span-1">
          <h4 className="mb-2 text-sm text-grey-450">Company Size</h4>
          <span className="text-md  text-grey-300">1k-2k Employees</span>
        </div>
        <div className="col-span-1">
          <h4 className="mb-2 text-sm text-grey-450">Sector</h4>
          <span className="text-md  text-grey-300">
            Information Technology, Infrastructure{" "}
          </span>
        </div>
        <div className="col-span-1">
          <h4 className="mb-2 text-sm text-grey-450">Founded In</h4>
          <span className="text-md  text-grey-300">2019</span>
        </div>
        <div className="col-span-1">
          <h4 className="mb-2 text-sm text-grey-450">Type</h4>
          <span className="text-md text-grey-300">Private</span>
        </div>

        <div className="col-span-1">
          <h4 className="mb-2 text-sm text-grey-450">Funding</h4>
          <span className="text-md text-grey-300">Bootstrapped</span>
        </div>
        <div className="col-span-1">
          <h4 className="mb-2 text-sm text-grey-450">Founded By</h4>
          <span className="text-md text-grey-300">
            Scott Farquhar, Mike Cannon-Brookes
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobFooter;
