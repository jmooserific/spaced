import React from "react";
import { Launch } from "../../api/spaceX";
import { ReactComponent as Falcon9b5 } from "./resources/Falcon9b5.svg";
import { ReactComponent as Falcon9b5Dragon } from "./resources/Falcon9b5-dragon.svg";

interface RocketProps {
  launch: Launch;
}

export default ({ launch }: RocketProps) => {
  if (launch.payloads && launch.payloads[0].type !== "Satellite") {
    return <Falcon9b5Dragon />;
  }
  return <Falcon9b5 />;
};
