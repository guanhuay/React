import React from "react";
import { PermissionConsumer } from "./PermissionProvider";

const Third = () => {
  return (
    <PermissionConsumer name={"third"}>
      <div>
        <button>Third</button>
      </div>
    </PermissionConsumer>
  );
};

export default Third;
