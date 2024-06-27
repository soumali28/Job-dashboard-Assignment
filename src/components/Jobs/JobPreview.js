import React from "react";
import JobHeader from "./JobHeader";
import JobsDesp from "./JobsDesp";
import AboutJob from "./AboutJob";
import JobFooter from "./JobFooter";


const JobPreview = () => {
  return (
    <div className="border-r">
      <JobHeader title="Senior Product Designer" startDate="2" status="Open" location="Delaware,USA" range="$300k-$400k"/>
      <JobsDesp />
      <AboutJob />
      <JobFooter company="Atlassian" />
    </div>
  );
};

export default JobPreview;
