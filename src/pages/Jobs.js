import React from "react";
import JobNavbar from "../components/Jobs/JobNavbar";
import JobPreview from "../components/Jobs/JobPreview";
import JobSidebar from "../components/Jobs/JobSidebar";

const Jobs = () => {
  return (
    <div>
      <JobNavbar />
      <div className="w-full flex">
        <div className="w-[75%]">
          <JobPreview />
        </div>
        <div className="w-[25%]">
          {" "}
          <JobSidebar />
        </div>
      </div>
    </div>
  );
};

export default Jobs;
