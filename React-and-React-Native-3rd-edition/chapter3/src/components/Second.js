import React from "react";
import { PermissionConsumer } from "./PermissionProvider";

const Second = () => {
  return (
    <PermissionConsumer name={"second"}>
      <div>
        <button>Second</button>
      </div>
    </PermissionConsumer>
  );
};

export default Second;
