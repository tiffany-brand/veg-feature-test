import React from 'react';
import logo from './logo.svg';
import './App.css';
import { detectOrientation } from './utils';
import OrientMsg from './OrientMsg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {detectOrientation() === "landscape" ?
          <OrientMsg />
          : <h1>This app is in portrait orientation</h1>
        }

      </header>
    </div>
  );
}

export default App;
