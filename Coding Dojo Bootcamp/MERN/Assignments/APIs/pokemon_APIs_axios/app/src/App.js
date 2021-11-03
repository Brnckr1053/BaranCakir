import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Pok from './components/pok'
import AxPok from './components/axpok';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PokiApi</h1>
        <Pok/>
        <AxPok/>
      </header>
    </div>
  );
}

export default App;
