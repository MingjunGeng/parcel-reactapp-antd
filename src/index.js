import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container)
root.render(
    <App />
);

function App() {
    return (
        <div >
            <p> This is App Component</p>
        </div>
    )
}