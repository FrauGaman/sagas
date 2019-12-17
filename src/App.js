import React from 'react';
import Counter from './components/Counter';
import './App.css';
import { action } from './store';
import store from './store';

function App() {
  console.log('lololo');
  return (
    <div className="App">
      <Counter
        onIncrementAsync={() => action('INCREMENT_ASYNC')}
        onIncrement={() => action('INCREMENT')}
        onDecrement={() => action('DECREMENT')}
      />
    </div>
  );
}

export default App;
