import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";

import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

initParticlesEngine(async (engine) => {
  await loadSlim(engine);
}).then(() => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
