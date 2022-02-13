import React from 'react';
import './App.css';
import { AppRouter } from './routers/AppRouter';

function App() {
  return (
    <div className="App dark:bg-black">
      <AppRouter/>
    </div>
  );
}

export default App;
