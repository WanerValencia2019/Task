import React, {  } from "react";
import Screens from "./screens"
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import {persistedStore,store} from "./redux"

function App() {
  return (
      <Provider store={store}>
        <PersistGate persistor={persistedStore} loading={null}>
          <Screens />
        </PersistGate>
      </Provider>
  );
}

export default App;
