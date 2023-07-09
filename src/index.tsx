import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/App/App";
import { Provider } from "react-redux";
import store from "./services/store";

const root = document.getElementById("root");

if (root) {
  const rootElement = ReactDOM.createRoot(root);

  rootElement.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  throw new Error("Root element not found.");
}
