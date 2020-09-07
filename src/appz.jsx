import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalLayout from "./layouts/global-layout";
import ScrollToTop from "./components/scroll-to-top";
import Routes from "./routes";

import "./styles/global.css";

export default function App() {
  return (
    <Router>
      <GlobalLayout>
        <ScrollToTop />
        <Routes />
      </GlobalLayout>
    </Router>
  );
}
