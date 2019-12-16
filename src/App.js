import React from 'react';
import Counter from './components/Counter';
import './App.css';

function App({ store }) {
  return (
    <div className="App">
      <Counter
        value={store.getState()}
        onIncrementAsync={() => action('INCREMENT_ASYNC')}
        onIncrement={() => action('INCREMENT')}
        onDecrement={() => action('DECREMENT')}
      />
    </div>
  );
}

export default App;
