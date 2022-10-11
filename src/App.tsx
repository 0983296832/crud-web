import React, { Suspense } from "react";
import RootRoute from "./routes";

const App = () => {
  return (
    <div className="bg-[#fffdfd]">
      <Suspense fallback={null}>
        <RootRoute />
      </Suspense>
    </div>
  );
};

export default App;
