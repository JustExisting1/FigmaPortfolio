import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FigmaPortfolio from "./Pages/FigmaPortfolio.tsx";
import { HashRouter, Route, Routes } from "react-router";
import FigmaWorks from "./Pages/FigmaWorks.tsx";
import FigmaWorkDetails from "./Pages/FigmaWorkDetails.tsx";
import FigmaBlog from "./Pages/FigmaBlog.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<FigmaPortfolio />} />
        <Route path="/works" element={<FigmaWorks />} />
        <Route path="/works/details" element={<FigmaWorkDetails />} />
        <Route path="/blog" element={<FigmaBlog />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
