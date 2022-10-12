import App from "./App";
import "./style.css";
import "antd/dist/antd.min.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { createRoot } from "react-dom/client";
import i18next from "./i18n.js";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement!);
console.log(i18next);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
