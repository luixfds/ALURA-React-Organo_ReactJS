import logo from './logo.svg';
import './App.css';
import Banner from './componentes/Banner/Banner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Óla, aqui é o arquivo <code>src/App.js</code> isso tudo é save reload, manda bala.
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
