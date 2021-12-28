import logo from './logo.svg';
import './App.css';
import MiModulo from './MiModulo'


function App() {
  // LO QUE VOY A VER EN PANTALLA
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Martina</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MiModulo/>
    </div>
  );
}

export default App;
