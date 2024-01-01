import React, { useState, useEffect } from 'react';
import './App.css';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress < 100) {
          return prevProgress + 10;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        {progress < 100 ? 'Loading' : 'Complete'}
      </div>
      <div className="progress-text">{`${progress}%`}</div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>React Progress Bar Component</h1>
      <ProgressBar />
    </div>
  );
}

export default App;
