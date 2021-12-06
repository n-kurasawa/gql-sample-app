import React from "react";
import { RelayEnvironmentProvider } from "react-relay";

import { BlogList } from "./components/BlogList";
import { relayEnvironment } from "./lib/relayEnvironment";

const App: React.VFC = () => {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <React.Suspense fallback="Loading...">
        <BlogList />
      </React.Suspense>
    </RelayEnvironmentProvider>
  );
};

export default App;
