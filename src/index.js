
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import Layout from "./layout";
import Home from "./pages/home/Home";
import Players from "./pages/players/Players";
import PlayerPreview from "./components/playerpreview/Playerpreview";
import Teams from "./pages/teams/Teams";
import Quiz from "./pages/quiz/Quiz";
import About from "./pages/about/About";

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="players" element={<Players />} />
                    <Route path="players/:id" element={<PlayerPreview />} />
                    <Route path="teams" element={<Teams />} />
                    <Route path="quiz" element={<Quiz />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </HashRouter>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
