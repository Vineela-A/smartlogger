import logo from './logo.svg';
import './App.css';
import CustomLogger from './components/SmartLogger/CustomLogger';
import ConsoleLogger from './components/SmartLogger/ConsoleLogger';
import FileLogger from './components/SmartLogger/FileLogger';

function App() {
  const logger = CustomLogger.getInstance(); // Use the singleton instance
  logger.addLogDestination(new ConsoleLogger());
  logger.addLogDestination(new FileLogger("test.txt"));
  logger.log('App component rendered');
  logger.info('This is an info message');
  logger.warn('This is a warning message');
  logger.error('This is an error message');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
