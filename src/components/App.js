import { Provider } from 'react-redux'
import Counterdisplay from './Counter/counterDisplay'
import Store from './Counter/store'
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
      <Provider store={Store}>
        <Counterdisplay />
      </Provider>
    </div>
  )
}

export default App
