import React from "react";

import DataProject from "../component/DataProject";

export default function Project(props) {
  return (
    <>
      <div className="mx-w-full min-h-fit p-4 m-2 " id="project">
        <h1 className="text-center text-3xl ">Projects</h1>
        <div className="md:grid grid-cols-2 gap-3 my-8">
          <DataProject name="project1"/>
          <DataProject name ="project2"/>
          <DataProject  name ="project3" />

        </div>
      </div>
    </>
  );
}
