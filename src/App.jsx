import "./index.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes, 
} from "react-router-dom";
import { Chapters } from "./pages/Chapters";
import { Home } from "./pages/Home";
import { ViewYoutubeVideo } from "./pages/ViewYoutubeVideo";
import { ViewChapterSummary } from "./pages/ViewChapterSummary";
import { About } from "./pages/About";
import { Header } from "./components/components";

const App = () => (
  <Router>
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Chapters" element={<Chapters />} />
        <Route path="/ViewYoutubeVideo" element={<ViewYoutubeVideo />} />
        <Route path="/ViewChapterSummary" element={<ViewChapterSummary />} />
      </Routes>
    </div>
  </Router>
);

export default App;
