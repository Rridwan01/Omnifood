import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/styles/index.css";
import { Omnifood } from "./components/Omnifood";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Omnifood />
  </StrictMode>
);
