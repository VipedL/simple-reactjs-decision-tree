import React, { useState } from 'react';

import Card from './Card';
import decisionsFromFile from './decisions.json';
import './App.css';

function App() {
  const [decisions, setDecisions] = useState(decisionsFromFile);
  return (
    <div className="App">
      <header className="App-header">

      </header>
      {Array.isArray(decisions) &&
        decisions.map(decision => <Card decision={decision} onDecisionClick={() => setDecisions(decision.decisions)} />)
      }
      <div onClick={() => setDecisions(decisionsFromFile)}>
        clear
      </div>
    </div>
  );
}

export default App;
