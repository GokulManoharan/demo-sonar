import './App.css';
import Home from './Pages/Home';

import Button from './Components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button label="I am test"></Button>
        <Home />
      </header>
    </div>
  );
}

export default App;
