import { createRoot } from "react-dom/client";
import "./style.css";
import "@repo/ui/style.css";
import typescriptLogo from "/typescript.svg";
import { Header, Counter } from "@repo/ui";

const App = () => (
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" className="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img
        src={typescriptLogo}
        className="logo vanilla"
        alt="TypeScript logo"
      />
    </a>
    <Header title="Web" />
    <div className="card bg-blue-100">
      <Counter />
    </div>
  </div>
);

createRoot(document.getElementById("app")!).render(<App />);
