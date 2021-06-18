import React from "react"
import ReactDOM from "react-dom"
import "index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import store from "./redux/store"
import { Provider } from "react-redux"
import { HashRouter, BrowserRouter } from "react-router-dom"
const Router =
  process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
reportWebVitals()