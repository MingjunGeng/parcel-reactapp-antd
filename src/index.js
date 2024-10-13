import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";

import { Home } from "./components/pages/Home";
import { Login } from "./components/pages/Login";

import "../styles/index.less"

const container = document.getElementById("app");
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

function App() {
    return (
        <div >
            <h1> hi this is index.js</h1>
            <Routes>
                <Route path="/login" element={<Login  />} />
                <Route path="/" element={<Home  />} />
            </Routes>
        </div>
    )
}