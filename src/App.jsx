import { createRoot } from "react-dom/client";

import Order from "./Order";

const App = () => {
  return <Order />;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
