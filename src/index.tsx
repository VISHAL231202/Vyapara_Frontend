import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./ReduxToolkit/Store";
import "./i18n";
import { unstable_batchedUpdates } from "react-dom";
import { Component } from "react";

interface Props {
  children: React.ReactNode;
}
unstable_batchedUpdates(() => {
  console.error = () => {};
});

class ErrorBoundary extends Component<Props> {
  componentDidCatch(error: { message: string | string[]; }) {
    if (error.message.includes("ToastContainer")) {
      return;
    }
  }

  render() {
    return this.props.children;
  }
}
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ErrorBoundary>
    <Provider store={Store}>
      <App />
    </Provider>
  </ErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
