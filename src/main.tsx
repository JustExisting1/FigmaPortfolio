import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import LandingPage from "./Pages/LandingPage.tsx";
import Navbar from "./components/Navbar.tsx";
import FigmaPortfolio from "./Pages/FigmaPortfolio.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="w-full h-dvh">
      <FigmaPortfolio />
      {/* <Navbar />
      <LandingPage /> */}
    </div>
    {/* <App /> */}
  </StrictMode>
);
