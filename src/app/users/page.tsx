import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div>
      <div className="border border-red-300 h-500px">
        <h1>User page</h1>
        <p>This is the second page.</p>
      </div>
    </div>
  );
}

export default page;
