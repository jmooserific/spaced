import React, { FC } from "react";
import Launches from "./pages/launches/Launches";

const App: FC = () => {
  return (
    <div className="App container mx-auto" style={{ maxWidth: "65ch" }}>
      <Launches />
    </div>
  );
};

export default App;
