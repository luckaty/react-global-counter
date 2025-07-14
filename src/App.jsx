import React from 'react';
import { GlobalProvider } from './GlobalState';
import Counter from './Counter';

function App() {
  return (
    <GlobalProvider>
      <Counter />
    </GlobalProvider>
  );
}

export default App;
