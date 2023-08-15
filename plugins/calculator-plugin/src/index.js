import React from "react";
import { createRoot } from "react-dom/client";
import Calculator from "./App";

const rootElement = document.getElementById("root");
const reactRoot = createRoot(rootElement);

const renderApp = () => {
  reactRoot.render(<Calculator />);
};

if (reactRoot.unstable_isAsyncRoot) {
  reactRoot.unstable_createSyncRoot(rootElement).render(<Calculator />);
} else {
  renderApp();
}
