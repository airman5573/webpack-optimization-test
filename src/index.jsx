import { createRoot } from "react-dom/client";
import App from "./App";

const $root = document.getElementById("root");
const root = createRoot($root);
root.render(<App />);
