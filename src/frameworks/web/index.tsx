import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, combineReducers } from 'redux';
import reducers from '@redux/index';
import { Provider } from 'react-redux';
import Router from "./components/pages/router";
import './style.scss';


const store = createStore(combineReducers({ ...reducers }));

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));