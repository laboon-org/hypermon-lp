import React from "react";

import HomePage from "./page/Home";
import ErrorBoundary from "./util/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <HomePage />
      </ErrorBoundary>
    </div>
  );
}

export default App;
