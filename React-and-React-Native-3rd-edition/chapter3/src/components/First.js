import React from "react";
import { PermissionConsumer } from "./PermissionProvider";

const First = () => {
  return (
    <PermissionConsumer name={"first"}>
      <div>
        <button>First</button>
      </div>
    </PermissionConsumer>
  );
};

export default First;
