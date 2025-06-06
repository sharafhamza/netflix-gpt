import Body from "./components/Body";
import React from "react";
import appStore from "./utils/redux/appStore";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
