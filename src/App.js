import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import CustomLogger from './components/SmartLogger/CustomLogger';
import ConsoleLogger from './components/SmartLogger/ConsoleLogger';
import ConsoleLoggerStringify from './components/SmartLogger/ConsoleLoggerStringify';
import FileLogger from './components/SmartLogger/FileLogger';
import LogPage from './LogPage'; // Import the new file
import HomePage from './HomePage';

function App() {
  const logger = CustomLogger.getInstance(); // Use the singleton instance
  logger.addLogDestination(new ConsoleLogger());
  logger.addLogDestination(new ConsoleLoggerStringify());
  logger.addLogDestination(new FileLogger("test.txt"));

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage logger={logger} />} /> {/* Pass logger to HomePage */}
          <Route path="/log" element={<LogPage logger={logger} />} /> {/* Pass logger to LogPage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
