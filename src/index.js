import { createRoot } from "react-dom/client";

import "../styles/index.less"

const container = document.getElementById("app");
const root = createRoot(container)
root.render(
    <App />
);

function App() {
    return (
        <div >
            <h1> I am h1 tag </h1>
            <p> This is App Component</p>

        </div>
    )
}