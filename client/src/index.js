import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/views/App";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import Reducer from "./_reducers";

import "antd/dist/antd.css";

const createStoreWithMiddleware = applyMiddleware(
	promiseMiddleware,
	ReduxThunk
)(createStore);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider
			store={createStoreWithMiddleware(
				Reducer,
				window.__REDUX_DEVTOOLS_EXTENSION__ &&
					window.__REDUX_DEVTOOLS_EXTENSION__()
			)}
		>
			<App />
		</Provider>
	</React.StrictMode>
);
