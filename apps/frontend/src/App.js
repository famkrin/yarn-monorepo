import logo from './logo.svg';
import './App.css';
import { getSiteInfo } from 'site-info';

function App() {
  const siteInfo = getSiteInfo()
  return (
    <div className="App">
      <div>
        <p>{siteInfo.title}</p>
        <p>{siteInfo.subtitle}</p>
      </div>

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
