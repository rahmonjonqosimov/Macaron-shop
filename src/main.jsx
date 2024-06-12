import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
const App = lazy(() => import("./App.jsx"));
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./context/store.js";
import { Provider } from "react-redux";
import HeadLoading from "./components/loading/HeadLoading.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<HeadLoading />}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
