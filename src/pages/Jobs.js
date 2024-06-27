import React from "react";
import JobNavbar from "../components/Jobs/JobNavbar";
import JobPreview from "../components/Jobs/JobPreview";
import JobSidebar from "../components/Jobs/JobSidebar";

const Jobs = () => {
  return (
    <div className="overflow-x-hidden">
      <JobNavbar />
      <div className="w-[100%] flex">
        <div className="w-[75%]">
          <JobPreview />
        </div>
        <div className="w-[25%] bg-grey-10">
          {" "}
          <JobSidebar />
        </div>
      </div>
    </div>
  );
};

export default Jobs;
