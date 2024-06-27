import React from "react";

const AboutJob = () => {
  return (
    <div className="border-b px-20 py-6">
      <h4 className="mb-2 text-sm text-grey-450">About Job</h4>
      <div className="text-md text-grey-300">
        <ol className="list-decimal list-inside">
          <li>Handle the UI/UX research design</li>
          <li>
            Work on researching on latest web applications designs & trends
          </li>
          <li>Work on conceptualizing and visualizing</li>
          <li>
            Work on creating graphics content and other graphic related works
          </li>
        </ol>

        <p>Benefits:</p>
        <ul className="list-disc list-inside">
          <li>Health insurance</li>
          <li>Provident Fund</li>
        </ul>

        <p>Schedule:</p>
        <ul className="list-disc list-inside">
          <li> Day shift</li>
          <li>Supplemental pay types:</li>
          <li>Performance bonus</li>
          <li>Yearly bonus</li>
        </ul>
        <p>Work Location: In person</p>
      </div>
    </div>
  );
};

export default AboutJob;
