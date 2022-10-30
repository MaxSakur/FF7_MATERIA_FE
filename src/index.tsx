import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import getStore, { history } from "./store";
import "./utils/i18next.js";

// Add import { toast } from 'react-toastify';

import App from "./App";

const store = getStore();

ReactDOM.render(
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      {/* @ts-ignore: TODO */}
      <Router history={history}>
        {/* @ts-ignore: TODO */}
        <App history={history} />
      </Router>
    </DndProvider>
  </Provider>,
  document.getElementById("root")
);
