import React from "react";
import { RelayEnvironmentProvider } from "react-relay";

import { relayEnvironment } from "./lib/relayEnvironment";

const App: React.VFC = () => {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <React.Suspense fallback="Loading..." />
    </RelayEnvironmentProvider>
  );
};

export default App;
