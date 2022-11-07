import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { createRoot } from "react-dom/client";
import getStore, { history } from "./store";
import "./utils/i18next.js";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

import App from "./App";

const store = getStore();
const root = createRoot(document.getElementById("root")!);

root.render(
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      {/* @ts-ignore: TODO */}
      <Router history={history}>
        {/* @ts-ignore: TODO */}
        <App history={history} />
        <ToastContainer />
      </Router>
    </DndProvider>
  </Provider>
);
