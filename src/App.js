import React from 'react';
import store from './store';
import { actions } from './store';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <button
        type="button"
        onClick={() => store.dispatch(actions.increment())}
      >
        +
      </button>
      {store.getState()}
      <button
        type="button"
        onClick={() => store.dispatch(actions.decrement())}
      >
        -
      </button>
    </div>
  );
}

export default App;
