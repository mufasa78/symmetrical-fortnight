import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Font Awesome is now loaded in index.html with preload
createRoot(document.getElementById("root")!).render(<App />);
