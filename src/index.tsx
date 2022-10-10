import App from "./App";
import "./style.css";
import "antd/dist/antd.min.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
