import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Inject Font Awesome script
const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js';
script.async = true;
document.head.appendChild(script);

createRoot(document.getElementById("root")!).render(<App />);
