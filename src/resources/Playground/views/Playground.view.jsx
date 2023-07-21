import React from "react";

import { Alert, Auth } from "@infra/_exports";
import { Button } from "@components/_exports";

const Playground = () => {
  // User data
  const userData = () => {
    console.log(Auth.getLoggedUser());
    console.log(Auth.getLoggedUser().isExecutive());
  };

  return (
    <div>
      <Button onClick={() => Alert.info("Test message")}>Toast alert</Button>
      <Button onClick={userData}>Loged user data</Button>
    </div>
  );
};

export default Playground;
